/** Logo for next/og ImageResponse (Satori), which can't use React hooks. */
export function OgLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f58529" />
          <stop offset=".5" stopColor="#dd2a7b" />
          <stop offset="1" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#g)" />
      <rect x="14" y="14" width="36" height="36" rx="10" fill="none" stroke="#fff" strokeWidth="4" />
      <path d="M14 24h36" stroke="#fff" strokeWidth="4" />
      <path d="M20 14l5 10M30 14l5 10M40 14l5 10" stroke="#fff" strokeWidth="3" />
      <path d="M32 30v12m0 0-6-6m6 6 6-6" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
