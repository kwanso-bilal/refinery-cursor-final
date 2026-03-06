import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants";

/**
 * Forgot password form – Figma node 325:32912 (Auth/Form/ResetPassword).
 * Forgot your password?, email field, Reset Password button, Back link.
 */
export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth();
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!userName.trim()) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }
    setLoading(true);
    const result = await forgotPassword({ userName: userName.trim() });
    setLoading(false);
    if (result.success) {
      navigate(ROUTES.FORGOT_PASSWORD_SENT, { replace: true });
    } else {
      setMessage({ type: "error", text: result.message ?? "Request failed." });
    }
  }

  return (
    <div className="flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-4">
        <h1
          className="font-bold text-[32px] leading-[48px] text-[var(--auth-text-primary)] w-full"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Forgot your password?
        </h1>
        <p
          className="font-normal text-base leading-6 text-[var(--auth-text-secondary)] w-full"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {message && message.type === "error" && (
          <div
            className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 text-left"
            role="alert"
          >
            {message.text}
          </div>
        )}

        <div className="flex flex-col gap-1.5 text-left">
          <label
            htmlFor="forgot-email"
            className="text-[12px] leading-[18px] font-normal text-[var(--auth-text-disabled)]"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            Email address
          </label>
          <div className="relative h-[var(--auth-input-h)] rounded-[var(--auth-input-radius)] border border-[var(--auth-border)] bg-white">
            <input
              id="forgot-email"
              type="text"
              autoComplete="username email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email address"
              disabled={loading}
              className="auth-input absolute inset-0 w-full rounded-[var(--auth-input-radius)] border-0 bg-transparent px-4 py-4 text-base leading-6 placeholder:text-[var(--auth-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-inset"
              style={{ fontFamily: "Public Sans, sans-serif" }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={loading}
            className="flex h-[46px] w-full items-center justify-center rounded-[var(--auth-input-radius)] bg-[var(--auth-primary)] px-[22px] py-[11px] text-[15px] font-bold leading-[26px] text-white shadow-[var(--auth-primary-shadow)] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            {loading ? "Sending…" : "Reset Password"}
          </button>
          <Link
            to={ROUTES.LOGIN}
            className="flex h-[46px] w-full items-center justify-center rounded-[var(--auth-input-radius)] px-3 py-[11px] text-[15px] font-bold leading-[26px] text-[var(--auth-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-offset-2"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
