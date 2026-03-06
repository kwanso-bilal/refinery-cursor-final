import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../constants';
import {
  IconSquaresFour,
  IconBuildings,
  IconCurrencyCircleDollar,
  IconPassword,
  IconSignOut,
} from '../assets/dashboard-assets';

const NAV_ITEMS = [
  { to: ROUTES.DASHBOARD, label: 'Dashboard', icon: IconSquaresFour },
  { to: '/organizations', label: 'Organizations', icon: IconBuildings },
  { to: '/payments', label: 'Payments', icon: IconCurrencyCircleDollar },
];
const ACCOUNT_ITEMS = [{ to: '/change-password', label: 'Change Password', icon: IconPassword }];

/**
 * Dashboard layout – Figma node 325:32920 (Sidebar + main).
 * Responsive: sidebar collapses to overlay on small screens.
 */
export default function DashboardLayout() {
  const location = useLocation();
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="dashboard-module flex min-h-screen bg-white">
      {/* Sidebar backdrop (mobile) */}
      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 z-40 bg-black/20 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-[var(--auth-border)] bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-1 flex-col">
          {/* Logo - top */}
          <div className="flex h-[98px] items-center px-6">
            <Link to={ROUTES.DASHBOARD} className="font-black text-[32px] leading-[48px] text-black uppercase tracking-tight">
              Refinery
            </Link>
          </div>

          {/* User card */}
          <div className="mx-5 mb-2 flex h-[76px] items-center gap-4 rounded-xl bg-[rgba(145,158,171,0.08)] px-5 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(145,158,171,0.2)] text-[#637381]">
              <span className="text-sm font-semibold">SA</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[var(--auth-text-primary)]">Super Admin</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-1 flex-col gap-1 px-4 pb-6 pt-2">
            <p className="px-4 pb-2 pt-6 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-primary)]">
              General
            </p>
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 rounded-lg px-4 py-3 text-sm leading-[22px] ${
                  isActive(to)
                    ? 'bg-[rgba(0,171,85,0.08)] font-semibold text-[var(--auth-primary)]'
                    : 'font-normal text-[var(--auth-text-secondary)]'
                }`}
              >
                <Icon className="h-[22px] w-[22px] shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
            <p className="px-4 pb-2 pt-6 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-primary)]">
              Account
            </p>
            {ACCOUNT_ITEMS.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 rounded-lg px-4 py-3 text-sm leading-[22px] ${
                  isActive(to)
                    ? 'bg-[rgba(0,171,85,0.08)] font-semibold text-[var(--auth-primary)]'
                    : 'font-normal text-[var(--auth-text-secondary)]'
                }`}
              >
                <Icon className="h-[22px] w-[22px] shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Log out */}
          <div className="p-5 pt-0">
            <button
              type="button"
              onClick={() => logout()}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#dfe3e8] px-4 py-2.5 text-sm font-bold text-[var(--auth-text-primary)] shadow-[0_8px_16px_rgba(145,158,171,0.16)] hover:bg-[#d0d5dc]"
            >
              <IconSignOut className="h-5 w-5" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-0">
        {/* Mobile header with menu toggle */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-[var(--auth-border)] bg-white px-4 lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <span className="font-black text-xl uppercase text-black">Refinery</span>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
