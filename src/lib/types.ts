export type ErrorCode =
  | "EMPTY_INPUT"
  | "INVALID_URL"
  | "PRIVATE_OR_INACCESSIBLE"
  | "NOT_FOUND"
  | "UNSUPPORTED_MEDIA"
  | "TEMPORARILY_UNAVAILABLE"
  | "PROVIDER_NOT_CONFIGURED"
  | "RATE_LIMITED"
  | "PAYLOAD_TOO_LARGE"
  | "DOWNLOAD_FAILED"
  | "INTERNAL_ERROR";

export interface ReelMedia {
  title: string;
  thumbnail: string | null;
  videoUrl: string;
  author?: string | null;
  caption?: string | null;
}

export interface InspectSuccess {
  success: true;
  data: ReelMedia & { shortcode: string };
}

export interface ApiFailure {
  success: false;
  error: { code: ErrorCode; message: string };
}

export type InspectResponse = InspectSuccess | ApiFailure;
