/**
 * Auth module assets – Figma design nodes Refinery / Tracking Unlimited.
 * Logo from Figma MCP asset; icons as inline SVGs for reliability.
 */

export const AUTH_LOGO_REFINERY =
  'https://www.figma.com/api/mcp/asset/2caf51c4-eeb1-4a02-8dc0-1ddde83c35b0';

export function IconEye({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconEyeOff({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Email sent / request sent success – paper plane style per Figma node 325:32915 */
export function IconEmailSent({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="104"
      height="120"
      viewBox="0 0 104 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Paper plane + envelope hint */}
      <path
        d="M4 40v76h96V40L52 82 4 40z"
        fill="#00ab55"
        fillOpacity="0.2"
      />
      <path
        d="M100 4H4c-2.2 0-4 1.8-4 4v32l48 42 48-42V8c0-2.2-1.8-4-4-4z"
        fill="#00ab55"
        fillOpacity="0.35"
      />
      <path
        d="M52 78L4 40V8c0 2.2 1.8 4 4 4h96c2.2 0 4-1.8 4-4v32L52 78z"
        fill="#00ab55"
      />
    </svg>
  );
}

/** Password successfully set – check circle per Figma node 615:146472 */
export function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="60" cy="60" r="60" fill="#00ab55" />
      <path
        d="M52.5 75L35 57.5l7.07-7.07L52.5 60.86 77.93 35.43 85 42.5 52.5 75z"
        fill="#fff"
      />
    </svg>
  );
}
