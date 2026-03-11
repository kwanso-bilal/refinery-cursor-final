import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastProvider } from './contexts/ToastContext';
import { ToastContainer } from './components/ToastContainer';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ForgotPasswordSentPage from './pages/auth/ForgotPasswordSentPage';
import PasswordSetPage from './pages/auth/PasswordSetPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import OrganizationsPage from './pages/organizations/OrganizationsPage';
import InviteOrganizationPage from './pages/organizations/InviteOrganizationPage';
import EditOrganizationPage from './pages/organizations/EditOrganizationPage';
import { ROUTES } from './constants';

/** Redirects "/" to login when not authenticated, to dashboard when authenticated. */
function DefaultRouteRedirect() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="text-slate-500">Loading…</span>
      </div>
    );
  }
  return (
    <Navigate to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN} replace />
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-[var(--auth-text-primary)]">{title}</h1>
      <p className="mt-2 text-sm text-[var(--auth-text-secondary)]">Coming soon.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ToastContainer />
        <Routes>
        <Route path={ROUTES.HOME} element={<DefaultRouteRedirect />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD_SENT} element={<ForgotPasswordSentPage />} />
          <Route path={ROUTES.PASSWORD_SET} element={<PasswordSetPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.ORGANIZATIONS} element={<OrganizationsPage />} />
          <Route path={ROUTES.ORGANIZATIONS_INVITE} element={<InviteOrganizationPage />} />
          <Route path={ROUTES.ORGANIZATIONS_EDIT} element={<EditOrganizationPage />} />
          <Route path="/payments" element={<PlaceholderPage title="Payments" />} />
          <Route path="/change-password" element={<PlaceholderPage title="Change Password" />} />
          <Route path="/invoices" element={<PlaceholderPage title="Invoices" />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
