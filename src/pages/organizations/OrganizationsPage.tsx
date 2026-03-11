import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client/react';
import {
  FindAllOrgsDocument,
  FindAllSubscriptionPlansDocument,
  DeleteOrgDocument,
} from '../../generated/graphql/graphql';
import { ROUTES, orgEditPath } from '../../constants';
import { useToast } from '../../contexts/ToastContext';
import { Breadcrumb } from '../../components/organizations/Breadcrumb';
import { IconSearch, IconCaretDown, IconDotsVertical } from '../../assets/organization-icons';
import type { OrganizationStatus } from '../../generated/graphql/graphql';

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25, 50];
const DEFAULT_PAGE_SIZE = 10;

type TabFilter = 'all' | 'ACTIVE' | 'INACTIVE';

function formatJoiningDate(iso: string | undefined): string {
  if (!iso) return '—';
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}/${String(d.getFullYear()).slice(2)}`;
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status === 'ACTIVE';
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold leading-5 ${
        isActive
          ? 'bg-[rgba(84,214,44,0.16)] text-[#229a16]'
          : 'bg-[rgba(255,72,66,0.16)] text-[#b72136]'
      }`}
    >
      {status === 'ACTIVE' ? 'Active' : status === 'INACTIVE' ? 'Inactive' : status}
    </span>
  );
}

export default function OrganizationsPage() {
  const { addToast } = useToast();
  const [tab, setTab] = useState<TabFilter>('all');
  const [search, setSearch] = useState('');
  const [packageFilter, setPackageFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(DEFAULT_PAGE_SIZE);
  const [rowMenuId, setRowMenuId] = useState<string | null>(null);

  const statusFilter: OrganizationStatus | undefined =
    tab === 'all' ? undefined : (tab as OrganizationStatus);

  const { data: orgsData, loading } = useQuery(FindAllOrgsDocument, {
    variables: {
      findAllOrgsInput: {
        paginationOptions: { page, limit },
        search: search.trim() || undefined,
        status: statusFilter,
        planId: packageFilter === 'all' ? undefined : packageFilter,
      },
    },
  });

  const { data: plansData } = useQuery(FindAllSubscriptionPlansDocument, {
    variables: {
      findAllSubscriptionPlansInput: {
        paginationOptions: { page: 1, limit: 100 },
      },
    },
  });

  const [deleteOrg] = useMutation(DeleteOrgDocument, {
    refetchQueries: [{ query: FindAllOrgsDocument }],
  });

  const handleDeactivate = async (orgId: string) => {
    closeMenu();
    if (!window.confirm('Deactivate this organization?')) return;
    try {
      const result = await deleteOrg({ variables: { deleteOrgInput: { id: orgId } } });
      const resp = result.data?.deleteOrg?.response;
      const status = resp?.status;
      if (status === 200 || status === 201) {
        addToast('Organization deactivated successfully.', 'success');
      } else {
        addToast(resp?.error ?? resp?.message ?? 'Failed to deactivate organization.', 'error');
      }
    } catch (err) {
      addToast(err instanceof Error ? err.message : 'Failed to deactivate organization.', 'error');
    }
  };

  const organizations = orgsData?.findAllOrgs?.organizations ?? [];
  const pagination = orgsData?.findAllOrgs?.pagination;
  const totalCount = pagination?.totalCount ?? 0;
  const totalPages = pagination?.totalPages ?? 0;
  const plans = plansData?.findAllSubscriptionPlans?.subscriptionPlans ?? [];

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalCount);

  const closeMenu = () => setRowMenuId(null);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)]">
            Organizations
          </h1>
          <Breadcrumb items={[{ label: 'Dashboard', to: ROUTES.DASHBOARD }, { label: 'Organizations' }]} />
        </div>
        <Link
          to={ROUTES.ORGANIZATIONS_INVITE}
          className="inline-flex items-center justify-center rounded-lg bg-[var(--auth-primary)] px-6 py-3 text-[15px] font-bold leading-[26px] text-white shadow-[0_8px_16px_rgba(0,171,85,0.24)] hover:opacity-95"
        >
          Invite
        </Link>
      </header>

      {/* Card: tabs + filters + table + pagination */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_-4px_rgba(145,158,171,0.12)]">
        {/* Tabs */}
        <div className="flex gap-10 border-b border-[var(--auth-border)] bg-[#f4f6f8] pl-6 pt-1">
          {(['all', 'ACTIVE', 'INACTIVE'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setPage(1); }}
              className={`flex flex-col items-center pb-3 pt-3 text-sm font-semibold leading-[22px] ${
                tab === t
                  ? 'text-[var(--auth-text-primary)]'
                  : 'text-[var(--auth-text-secondary)]'
              }`}
            >
              {t === 'all' ? 'All' : t === 'ACTIVE' ? 'Active' : 'Inactive'}
              {tab === t && (
                <span className="mt-1.5 h-0.5 w-full rounded-full bg-[var(--auth-primary)]" />
              )}
            </button>
          ))}
        </div>

        {/* Search + Packages */}
        <div className="flex flex-wrap items-center gap-4 border-b border-[var(--auth-border)] bg-white px-6 py-5">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#919eab]">
              <IconSearch className="h-6 w-6" />
            </span>
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="auth-input h-14 w-full rounded-lg border border-[var(--auth-border)] pl-10 pr-4 text-base text-[var(--auth-text-primary)] placeholder:text-[var(--auth-text-disabled)]"
            />
          </div>
          <div className="relative min-w-[180px]">
            <label className="absolute -top-2.5 left-2 bg-white px-0.5 text-xs font-normal text-[var(--auth-text-disabled)]">
              Packages
            </label>
            <select
              value={packageFilter}
              onChange={(e) => { setPackageFilter(e.target.value); setPage(1); }}
              className="h-14 w-full appearance-none rounded-lg border border-[var(--auth-border)] bg-white pl-3 pr-10 text-base text-[var(--auth-text-primary)]"
            >
              <option value="all">All</option>
              {plans.map((p) => (
                <option key={p?.id} value={p?.id ?? ''}>{p?.name ?? '—'}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--auth-text-primary)]">
              <IconCaretDown className="h-6 w-6" />
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="h-14 bg-[#f4f6f8]">
                <th className="px-6 py-0 text-left text-xs font-semibold leading-[22px] text-[var(--auth-text-secondary)]">
                  Organization
                </th>
                <th className="px-6 py-0 text-left text-xs font-semibold leading-[22px] text-[var(--auth-text-secondary)]">
                  Email
                </th>
                <th className="px-6 py-0 text-left text-xs font-semibold leading-[22px] text-[var(--auth-text-secondary)]">
                  Package
                </th>
                <th className="px-6 py-0 text-left text-xs font-semibold leading-[22px] text-[var(--auth-text-secondary)]">
                  Joining Date
                </th>
                <th className="px-6 py-0 text-left text-xs font-semibold leading-[22px] text-[var(--auth-text-secondary)]">
                  Status
                </th>
                <th className="w-14 px-2 py-0" aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-[var(--auth-text-secondary)]">
                    Loading…
                  </td>
                </tr>
              ) : organizations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-[var(--auth-text-secondary)]">
                    No organizations found.
                  </td>
                </tr>
              ) : (
                organizations.map((org) => {
                  if (!org) return null;
                  const packageName = org.orgSubscription?.[0]?.subscriptionPlan?.name ?? '—';
                  const email = org.adminUser?.email ?? '—';
                  const isMenuOpen = rowMenuId === org.id;
                  return (
                    <tr
                      key={org.id}
                      className="h-[72px] border-t border-[var(--auth-border)] bg-white"
                    >
                      <td className="px-6 py-0 text-sm font-bold leading-[22px] text-[var(--auth-text-primary)]">
                        {org.name}
                      </td>
                      <td className="px-6 py-0 text-sm font-normal leading-[22px] text-[var(--auth-text-primary)]">
                        {email}
                      </td>
                      <td className="px-6 py-0 text-sm font-normal leading-[22px] text-[var(--auth-text-primary)]">
                        {packageName}
                      </td>
                      <td className="px-6 py-0 text-sm font-normal leading-[22px] text-[var(--auth-text-primary)]">
                        {formatJoiningDate(org.createdAt)}
                      </td>
                      <td className="px-6 py-0">
                        <StatusBadge status={org.status} />
                      </td>
                      <td className="relative px-2 py-0">
                        <button
                          type="button"
                          onClick={() => setRowMenuId(isMenuOpen ? null : org.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--auth-text-secondary)] hover:bg-black/5"
                          aria-label="Open menu"
                        >
                          <IconDotsVertical className="h-5 w-5" />
                        </button>
                        {isMenuOpen && (
                          <>
                            <div className="fixed inset-0 z-10" aria-hidden onClick={closeMenu} />
                            <div className="absolute right-2 top-full z-20 mt-1 min-w-[180px] rounded-lg border border-[var(--auth-border)] bg-white py-1 shadow-lg">
                              <Link
                                to={orgEditPath(org.id)}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-left text-sm text-[var(--auth-text-primary)] hover:bg-[#f4f6f8]"
                              >
                                Edit
                              </Link>
                              <button
                                type="button"
                                onClick={() => { closeMenu(); /* Access Organization: could switch context or open portal */ }}
                                className="block w-full px-4 py-2 text-left text-sm text-[var(--auth-text-primary)] hover:bg-[#f4f6f8]"
                              >
                                Access Organization
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeactivate(org.id)}
                                className="block w-full px-4 py-2 text-left text-sm text-[#b72136] hover:bg-red-50"
                              >
                                Deactivate
                              </button>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-end gap-6 border-t border-[var(--auth-border)] bg-white px-6 py-3">
          <span className="text-sm font-normal text-[var(--auth-text-primary)]">Rows per page:</span>
          <select
            value={limit}
            onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }}
            className="h-9 rounded border border-[var(--auth-border)] bg-white px-2 text-sm text-[var(--auth-text-primary)]"
          >
            {ROWS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span className="text-sm font-normal text-[var(--auth-text-primary)]">
            {totalCount === 0 ? '0-0 of 0' : `${start}-${end} of ${totalCount}`}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--auth-text-secondary)] disabled:opacity-40 hover:bg-black/5 disabled:hover:bg-transparent"
              aria-label="Previous page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              disabled={page >= totalPages || totalPages === 0}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--auth-text-secondary)] disabled:opacity-40 hover:bg-black/5 disabled:hover:bg-transparent"
              aria-label="Next page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
