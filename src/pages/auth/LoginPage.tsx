import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants";
import { IconEye, IconEyeOff } from "../../assets/auth-assets";

const REMEMBER_EMAIL_KEY = "refinery_remember_email";

/**
 * Login page – Figma node 325:32909 (Auth/Form/Login).
 * Sign in to Refinery, email/password, Remember me, Forgot password?, Login button.
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from =
    (location.state as { from?: { pathname: string } } | null)?.from
      ?.pathname ?? ROUTES.HOME;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(REMEMBER_EMAIL_KEY);
    if (saved) {
      setEmail(saved);
      setRememberMe(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);
    const result = await login({ email: email.trim(), password });
    setLoading(false);
    if (result.success) {
      if (rememberMe) {
        localStorage.setItem(REMEMBER_EMAIL_KEY, email.trim());
      } else {
        localStorage.removeItem(REMEMBER_EMAIL_KEY);
      }
      navigate(from, { replace: true });
    } else {
      setError(result.message ?? "Login failed.");
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1
          className="font-bold text-[24px] leading-[36px] text-[var(--auth-text-primary)]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Sign in to Refinery
        </h1>
        <p
          className="font-normal text-base leading-6 text-[var(--auth-text-secondary)]"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Enter your details below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {error && (
          <div
            className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3"
            role="alert"
          >
            {error}
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="login-email"
              className="text-[12px] leading-[18px] font-normal text-[var(--auth-text-disabled)]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              Email address
            </label>
            <div className="relative h-[var(--auth-input-h)] rounded-[var(--auth-input-radius)] border border-[var(--auth-border)] bg-white">
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jakewilliams@gmail.com"
                disabled={loading}
                className="auth-input absolute inset-0 w-full rounded-[var(--auth-input-radius)] border-0 bg-transparent px-4 py-4 text-base leading-6 placeholder:text-[var(--auth-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-inset"
                style={{ fontFamily: "Public Sans, sans-serif" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="login-password"
              className="text-[12px] leading-[18px] font-normal text-[var(--auth-text-disabled)]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              Password
            </label>
            <div className="relative h-[var(--auth-input-h)] rounded-[var(--auth-input-radius)] border border-[var(--auth-border)] bg-white">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={loading}
                className="auth-input absolute inset-0 w-full rounded-[var(--auth-input-radius)] border-0 bg-transparent px-4 py-4 pr-12 text-base leading-6 placeholder:text-[var(--auth-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-inset"
                style={{ fontFamily: "Public Sans, sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[var(--auth-text-disabled)] hover:bg-black/5 hover:text-[var(--auth-text-primary)]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <IconEyeOff className="h-6 w-6" />
                ) : (
                  <IconEye className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-0">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-5 w-5 rounded border-[var(--auth-border)] text-[var(--auth-primary)] focus:ring-[var(--auth-primary)]"
            />
            <span
              className="ml-2 text-sm leading-[22px] font-normal text-[var(--auth-text-primary)]"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            >
              Remember me
            </span>
          </label>
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-sm font-semibold leading-[22px] text-[var(--auth-primary)] hover:underline"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex h-[46px] w-full items-center justify-center rounded-[var(--auth-input-radius)] bg-[var(--auth-primary)] px-[22px] py-[11px] text-[15px] font-bold leading-[26px] text-white shadow-[var(--auth-primary-shadow)] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          {loading ? "Signing in…" : "Login"}
        </button>
      </form>
    </div>
  );
}
