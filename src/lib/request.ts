import { NextResponse } from "next/server";
import { MediaError, failureBody, statusFor } from "./errors";
import type { ErrorCode } from "./types";

export const MAX_BODY_BYTES = 2_048;

/** Reads a small JSON or form body, rejecting anything over MAX_BODY_BYTES. */
export async function readSmallBody(req: Request): Promise<Record<string, unknown>> {
  const declared = Number(req.headers.get("content-length") ?? "0");
  if (declared > MAX_BODY_BYTES) throw new MediaError("PAYLOAD_TOO_LARGE");

  const reader = req.body?.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  if (reader) {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new MediaError("PAYLOAD_TOO_LARGE");
      }
      chunks.push(value);
    }
  }
  const text = new TextDecoder().decode(Buffer.concat(chunks));
  const type = req.headers.get("content-type") ?? "";

  if (type.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(text));
  }
  try {
    const parsed: unknown = JSON.parse(text);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

export function errorResponse(code: ErrorCode) {
  return NextResponse.json(failureBody(code), {
    status: statusFor(code),
    headers: { "Cache-Control": "no-store" },
  });
}

export function toErrorCode(err: unknown): ErrorCode {
  return err instanceof MediaError ? err.code : "INTERNAL_ERROR";
}
