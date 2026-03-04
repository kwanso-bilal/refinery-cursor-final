import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES } from '../../constants';

/**
 * Forgot password page.
 * Figma design node (implement to match):
 * - node-id=325-32915: https://www.figma.com/design/FtKDWB8xoEiu9U0nwWMNKd/Refinery---Tracking-Unlimited?node-id=325-32915
 */
export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!userName.trim()) {
      setMessage({ type: 'error', text: 'Please enter your username or email.' });
      return;
    }
    setLoading(true);
    const result = await forgotPassword({ userName: userName.trim() });
    setLoading(false);
    if (result.success) {
      setMessage({ type: 'success', text: result.message ?? 'Check your email for reset instructions.' });
    } else {
      setMessage({ type: 'error', text: result.message ?? 'Request failed.' });
    }
  }

  return (
    <div className="rounded-xl bg-white shadow-lg border border-slate-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-slate-800">Reset password</h1>
        <p className="text-slate-500 mt-1">Enter your username or email to receive reset instructions.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {message && (
          <div
            className={`rounded-lg px-4 py-3 text-sm ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
            role="alert"
          >
            {message.text}
          </div>
        )}

        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Username / Email
          </label>
          <input
            id="userName"
            type="text"
            autoComplete="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
            placeholder="Enter your username or email"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-800 text-white font-medium py-2.5 px-4 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          {loading ? 'Sending…' : 'Send reset instructions'}
        </button>

        <p className="text-center">
          <Link
            to={ROUTES.LOGIN}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Back to sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
