const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function monthToIndex(month: string | number): number {
  if (typeof month === 'number') return month >= 1 && month <= 12 ? month - 1 : -1;
  const s = String(month).trim();
  const i = MONTHS.findIndex((m) => m.toLowerCase() === s.toLowerCase());
  if (i >= 0) return i;
  const n = parseInt(s, 10);
  if (n >= 1 && n <= 12) return n - 1;
  return -1;
}

function normalizeRevenueByMonth(data: Array<{ month: string | number; revenue: number }> | undefined): number[] {
  const out = MONTHS.map(() => 0);
  if (!data?.length) return out;
  data.forEach(({ month, revenue }) => {
    const i = monthToIndex(month);
    if (i >= 0) out[i] = revenue;
  });
  return out;
}

type DashboardRevenueChartProps = {
  lastYearRevenue?: Array<{ month: string | number; revenue: number }>;
  thisYearRevenue?: Array<{ month: string | number; revenue: number }>;
};

export function DashboardRevenueChart({ lastYearRevenue, thisYearRevenue }: DashboardRevenueChartProps) {
  const lastYear = normalizeRevenueByMonth(lastYearRevenue);
  const thisYear = normalizeRevenueByMonth(thisYearRevenue);
  const maxVal = Math.max(250000, ...lastYear, ...thisYear);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
      <p className="mb-4 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
        Revenue
      </p>
      <div className="mb-4 flex flex-wrap items-center justify-end gap-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-md bg-[#ffe700]" />
          <span className="text-[13px] font-medium leading-[18px] text-[var(--auth-text-primary)]">
            Last Year Revenue
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-md bg-[var(--auth-primary)]" />
          <span className="text-[13px] font-medium leading-[18px] text-[var(--auth-text-primary)]">
            This Year Revenue
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col justify-between gap-10 py-2 text-right text-xs font-normal leading-[18px] text-[var(--auth-text-disabled)]">
          <span>$250K</span>
          <span>$200K</span>
          <span>$150K</span>
          <span>$100K</span>
          <span>$50K</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="relative h-[258px]">
            <svg viewBox="0 0 600 200" className="h-full w-full" preserveAspectRatio="none">
              {[250000, 200000, 150000, 100000, 50000].map((y, i) => (
                <line
                  key={i}
                  x1={0}
                  y1={200 - (y / 250000) * 200}
                  x2={600}
                  y2={200 - (y / 250000) * 200}
                  stroke="rgba(145,158,171,0.24)"
                  strokeWidth="1"
                  strokeDasharray="4 2"
                />
              ))}
              {/* Last year (yellow) */}
              <polyline
                fill="none"
                stroke="#FFE700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={lastYear
                  .map((v, i) => `${(i / 11) * 580 + 10},${200 - (v / maxVal) * 180 - 10}`)
                  .join(' ')}
              />
              {/* This year (green) */}
              <polyline
                fill="none"
                stroke="var(--auth-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={thisYear
                  .map((v, i) => `${(i / 11) * 580 + 10},${200 - (v / maxVal) * 180 - 10}`)
                  .join(' ')}
              />
            </svg>
          </div>
          <div className="mt-3 flex justify-between text-xs font-normal leading-[18px] text-[var(--auth-text-disabled)]">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
