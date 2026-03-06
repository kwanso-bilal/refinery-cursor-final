import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ForgotPasswordSentPage from './pages/auth/ForgotPasswordSentPage';
import PasswordSetPage from './pages/auth/PasswordSetPage';
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

function DashboardPlaceholder() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
        <p className="text-slate-600 mt-2">Protected area.</p>
        <button
          type="button"
          onClick={() => logout()}
          className="mt-4 rounded-lg bg-slate-200 text-slate-800 px-4 py-2 hover:bg-slate-300"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<DefaultRouteRedirect />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD_SENT} element={<ForgotPasswordSentPage />} />
          <Route path={ROUTES.PASSWORD_SET} element={<PasswordSetPage />} />
        </Route>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
              <DashboardPlaceholder />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
