import { useQuery } from '@apollo/client/react';
import {
  GetSuperAdminDashboardDocument,
  GetSuperAdminChartDocument,
  FindAllGrandInvoicesDocument,
} from '../../generated/graphql/graphql';
import { DashboardStatCards } from '../../components/dashboard/DashboardStatCards';
import { DashboardRevenueChart } from '../../components/dashboard/DashboardRevenueChart';
import { DashboardRecentInvoices } from '../../components/dashboard/DashboardRecentInvoices';

/**
 * Dashboard page – Figma node 325:32918.
 * Header, stat cards, revenue chart, recent invoices. Data from API.
 */
export default function DashboardPage() {
  const { data: dashboardData } = useQuery(GetSuperAdminDashboardDocument);
  const { data: chartData } = useQuery(GetSuperAdminChartDocument);
  const { data: invoicesData } = useQuery(FindAllGrandInvoicesDocument, {
    variables: {
      findAllGrandInvoicesInput: {
        paginationOptions: { page: 1, limit: 8 },
      },
    },
  });

  const dashboard = dashboardData?.getSuperAdminDashboard;
  const chart = chartData?.getSuperAdminChart;
  const invoices = invoicesData?.findAllGrandInvoices?.grandInvoices ?? [];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)] md:text-[24px]">
          Hi, Welcome back
        </h1>
      </header>

      {/* Stat cards */}
      <DashboardStatCards
        registeredOrgs={dashboard?.registeredOrgs}
        totalRevenue={dashboard?.totalRevenue}
        ordersProcessedToday={undefined}
      />

      {/* Revenue chart + Recent invoices */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
        <section className="lg:col-span-8">
          <DashboardRevenueChart
            lastYearRevenue={chart?.lastYearRevenue}
            thisYearRevenue={chart?.thisYearRevenue}
          />
        </section>
        <section className="lg:col-span-4">
          <DashboardRecentInvoices invoices={invoices} />
        </section>
      </div>
    </div>
  );
}
