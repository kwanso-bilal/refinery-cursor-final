import {
  IconCardBuildings,
  IconCardCoins,
  IconCardWarningCircle,
} from '../icons/DashboardCardIcons';

type StatCardProps = {
  value: string | number;
  label: string;
  bgColor: string;
  textColor: string;
  /** Slightly darker/opaque shade for the icon circle (Figma "background") */
  circleBgClass: string;
  icon: React.ReactNode;
};

/**
 * Stat card – Figma nodes 325:32924, 325:32925, 325:32926.
 * Icon in 64px circle centered horizontally at top 16.53%; value + label at top 128px.
 */
function StatCard({ value, label, bgColor, textColor, circleBgClass, icon }: StatCardProps) {
  return (
    <div
      className={`relative flex min-h-[200px] flex-1 min-w-0 flex-col rounded-[16px] md:min-h-[242px] ${bgColor}`}
    >
      {/* Icon holder circle – 64px, center of box horizontally, top 16.53% (Figma "background") */}
      <div
        className={`absolute left-1/2 top-[16.53%] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full ${circleBgClass}`}
      >
        {/* Icon 24px centered inside circle (Figma Buildings/Coins/WarningCircle) */}
        <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
      </div>
      {/* Value + label – centered, top 128px (Figma #206:95236) */}
      <div className="absolute left-1/2 top-[128px] flex w-[252px] max-w-[calc(100%-32px)] -translate-x-1/2 flex-col items-center text-center">
        <p
          className="font-bold leading-[48px] text-[32px]"
          style={{ color: textColor, fontFamily: 'Public Sans, sans-serif' }}
        >
          {value}
        </p>
        <p
          className="font-semibold text-sm leading-[22px] opacity-90"
          style={{ color: textColor, fontFamily: 'Public Sans, sans-serif' }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

type DashboardStatCardsProps = {
  registeredOrgs?: number;
  totalRevenue?: number;
  ordersProcessedToday?: number;
};

export function DashboardStatCards({
  registeredOrgs,
  totalRevenue,
  ordersProcessedToday,
}: DashboardStatCardsProps) {
  const formatRevenue = (v: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <StatCard
        value={registeredOrgs ?? '—'}
        label="Registered Organizations"
        bgColor="bg-[#c8facd]"
        textColor="#005249"
        circleBgClass="bg-[#005249]/[0.08]"
        icon={<IconCardBuildings className="h-6 w-6 text-[#005249]" />}
      />
      <StatCard
        value={totalRevenue != null ? formatRevenue(totalRevenue) : '—'}
        label="Total Revenue"
        bgColor="bg-[#d0f2ff]"
        textColor="#04297a"
        circleBgClass="bg-[#04297a]/[0.08]"
        icon={<IconCardCoins className="h-6 w-6 text-[#04297a]" />}
      />
      <StatCard
        value={ordersProcessedToday ?? '—'}
        label="Orders Processed Today"
        bgColor="bg-[#fff7cd]"
        textColor="#7a4f01"
        circleBgClass="bg-[#7a4f01]/[0.08]"
        icon={<IconCardWarningCircle className="h-6 w-6 text-[#7a4f01]" />}
      />
    </div>
  );
}
