/**
 * Dashboard card and recent-invoices icons – Figma design nodes 325:32924, 325:32925, 325:32926, 325:32967.
 * Inline SVG components matching Figma (Buildings, Coins, WarningCircle, ArrowUpRight).
 * All icons use viewBox 0 0 24 24 and currentColor for size/color control.
 */

const iconProps = {
  viewBox: '0 0 24 24' as const,
  fill: 'none' as const,
  xmlns: 'http://www.w3.org/2000/svg' as const,
  'aria-hidden': true,
};

/** Card 1 – Registered Organizations. Figma node Buildings (325:32924;0:3453). Multi-story building outline. */
export function IconCardBuildings({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" {...iconProps}>
      <path
        d="M3 21h18M3 21V8l9-5 9 5v13M3 10h18M9 21v-5M15 21v-5M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Card 2 – Total Revenue. Figma node Coins (325:32925;0:3453). Two stacked coins. */
export function IconCardCoins({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" {...iconProps}>
      <ellipse cx="12" cy="13" rx="6" ry="5" stroke="currentColor" strokeWidth="1.75" />
      <ellipse cx="12" cy="10" rx="6" ry="5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 6v2M12 14v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/** Card 3 – Orders Processed Today. Figma node WarningCircle (325:32926;0:3453). Circle with exclamation. */
export function IconCardWarningCircle({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" {...iconProps}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8v4M12 15.5h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Recent Invoices – Arrow up-right. Figma node 325:32967 / ArrowUpRight. */
export function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" {...iconProps}>
      <path
        d="M7 17L17 7M17 7h-6M17 7v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
