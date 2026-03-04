import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import { ROUTES } from './constants';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold text-slate-800">Refinery</h1>
      <p className="text-slate-600 mt-2">Welcome. Use the auth flow to sign in.</p>
      <nav className="mt-6 flex gap-4">
        <Link to={ROUTES.LOGIN} className="text-slate-700 underline hover:text-slate-900">
          Sign in
        </Link>
        <Link to={ROUTES.DASHBOARD} className="text-slate-700 underline hover:text-slate-900">
          Dashboard (protected)
        </Link>
      </nav>
    </div>
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
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
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
