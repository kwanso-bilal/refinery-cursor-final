import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '../../assets/dashboard-assets';

type InvoiceItem = {
  id: string;
  amount?: number | null;
  billableAmount?: number | null;
  createdAt?: string | null;
  status?: string | null;
  customer?: { name?: string | null } | null;
};

function formatDate(s: string | null | undefined): string {
  if (!s) return '—';
  try {
    const d = new Date(s);
    return isNaN(d.getTime()) ? s : d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });
  } catch {
    return s;
  }
}

function formatAmount(n: number | null | undefined): string {
  if (n == null) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);
}

type DashboardRecentInvoicesProps = {
  invoices: Array<InvoiceItem>;
};

export function DashboardRecentInvoices({ invoices }: DashboardRecentInvoicesProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
          Recent Invoices
        </p>
        <Link
          to="/invoices"
          className="flex h-6 w-6 shrink-0 items-center justify-center text-[var(--auth-text-secondary)] hover:text-[var(--auth-text-primary)]"
          aria-label="View all invoices"
        >
          <IconArrowUpRight className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {invoices.length === 0 ? (
          <p className="text-sm text-[var(--auth-text-secondary)]">No recent invoices</p>
        ) : (
          <div className="flex flex-col gap-4">
            {invoices.map((inv) => {
              const amount = inv.amount ?? inv.billableAmount ?? 0;
              const isNegative = amount < 0;
              const name = inv.customer?.name ?? 'Unknown';
              return (
                <div
                  key={inv.id}
                  className="flex items-center justify-between gap-4 text-sm leading-[22px] text-[var(--auth-text-primary)]"
                >
                  <span className="min-w-0 truncate flex-1" title={name}>
                    {name}
                  </span>
                  <span className="shrink-0 text-[var(--auth-text-primary)]">{formatDate(inv.createdAt)}</span>
                  <span
                    className={`shrink-0 font-medium ${
                      isNegative ? 'text-[#ff4842]' : 'text-[var(--auth-primary)]'
                    }`}
                  >
                    {formatAmount(amount)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
