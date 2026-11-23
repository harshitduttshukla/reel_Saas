import type { ReelMedia } from "../types";

export interface ReelLookup {
  shortcode: string;
  canonicalUrl: string;
}

/**
 * Adapter contract for any compliant media source. Implementations must:
 *  - only return media the operator is authorized to access,
 *  - throw MediaError with a precise code instead of returning fake data,
 *  - never log the submitted URL or the returned media URLs.
 */
export interface MediaProvider {
  readonly name: string;
  isConfigured(): boolean;
  resolve(lookup: ReelLookup): Promise<ReelMedia>;
}
