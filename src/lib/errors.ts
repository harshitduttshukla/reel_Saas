import type { ErrorCode } from "./types";

/** User-facing messages. Raw server errors are never sent to the browser. */
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  EMPTY_INPUT: "Please paste an Instagram Reel link first.",
  INVALID_URL: "That doesn't look like an Instagram Reel link. Use a link like https://www.instagram.com/reel/…",
  PRIVATE_OR_INACCESSIBLE: "This Reel is private or can't be accessed. Only public Reels you're authorized to download are supported.",
  NOT_FOUND: "This Reel could not be found. It may have been deleted.",
  UNSUPPORTED_MEDIA: "This post isn't a downloadable video Reel.",
  TEMPORARILY_UNAVAILABLE: "The video is temporarily unavailable. Please try again in a few minutes.",
  PROVIDER_NOT_CONFIGURED: "Downloading isn't available yet: no media retrieval provider is configured on this site.",
  RATE_LIMITED: "Too many requests. Please wait a minute and try again.",
  PAYLOAD_TOO_LARGE: "The request was too large.",
  DOWNLOAD_FAILED: "The download failed. Please try again.",
  INTERNAL_ERROR: "Something went wrong. Please try again.",
};

const STATUS: Record<ErrorCode, number> = {
  EMPTY_INPUT: 400,
  INVALID_URL: 400,
  PRIVATE_OR_INACCESSIBLE: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_MEDIA: 422,
  TEMPORARILY_UNAVAILABLE: 503,
  PROVIDER_NOT_CONFIGURED: 501,
  RATE_LIMITED: 429,
  PAYLOAD_TOO_LARGE: 413,
  DOWNLOAD_FAILED: 502,
  INTERNAL_ERROR: 500,
};

export class MediaError extends Error {
  constructor(public readonly code: ErrorCode) {
    super(code);
    this.name = "MediaError";
  }
}

export function statusFor(code: ErrorCode): number {
  return STATUS[code];
}

export function failureBody(code: ErrorCode) {
  return { success: false as const, error: { code, message: ERROR_MESSAGES[code] } };
}
