import { IconBuildings } from '../../assets/dashboard-assets';

type StatCardProps = {
  value: string | number;
  label: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
};

function StatCard({ value, label, bgColor, textColor, icon }: StatCardProps) {
  return (
    <div
      className={`flex min-h-[200px] flex-1 min-w-0 flex-col rounded-2xl p-6 md:min-h-[242px] ${bgColor}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center opacity-90">{icon}</div>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="font-bold leading-[48px] text-[32px]" style={{ color: textColor }}>
          {value}
        </p>
        <p className="font-semibold text-sm leading-[22px] opacity-90" style={{ color: textColor }}>
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
        icon={
          <IconBuildings className="h-8 w-8 text-[#005249]/70" />
        }
      />
      <StatCard
        value={totalRevenue != null ? formatRevenue(totalRevenue) : '—'}
        label="Total Revenue"
        bgColor="bg-[#d0f2ff]"
        textColor="#04297a"
        icon={
          <svg className="h-8 w-8 text-[#04297a]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v12M15 9.5c0 .83-.67 1.5-1.5 1.5H11v3h2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H11M13 8h-2V6h2.5C14.33 6 15 6.67 15 7.5S14.33 9 13.5 9H13z" />
          </svg>
        }
      />
      <StatCard
        value={ordersProcessedToday ?? '—'}
        label="Orders Processed Today"
        bgColor="bg-[#fff7cd]"
        textColor="#7a4f01"
        icon={
          <svg className="h-8 w-8 text-[#7a4f01]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l2 2" strokeLinecap="round" />
          </svg>
        }
      />
    </div>
  );
}
