import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { IconEmailSent } from '../../assets/auth-assets';

/**
 * Forgot password – request sent success – Figma node 325:32915 (Auth/Form/NewPassword).
 * Email sent icon, "Request sent successfully!", body text, Go To Sign In button.
 */
export default function ForgotPasswordSentPage() {
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <div className="h-[120px] w-[103.6px] flex items-center justify-center shrink-0">
        <IconEmailSent className="h-full w-auto text-[var(--auth-primary)]" />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h1
          className="font-bold text-[32px] leading-[48px] text-[var(--auth-text-primary)] w-full max-w-[480px]"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          Request sent successfully!
        </h1>
        <p
          className="font-normal text-base leading-6 text-[var(--auth-text-secondary)] w-full max-w-[480px]"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          We've sent a password reset link to your email. Please check and reset your password by using that link.
        </p>
      </div>
      <Link
        to={ROUTES.LOGIN}
        className="flex h-[46px] w-full items-center justify-center rounded-[var(--auth-input-radius)] bg-[var(--auth-primary)] px-[22px] py-[11px] text-[15px] font-bold leading-[26px] text-white shadow-[var(--auth-primary-shadow)] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[var(--auth-primary)] focus:ring-offset-2"
        style={{ fontFamily: 'Public Sans, sans-serif' }}
      >
        Go To Sign In
      </Link>
    </div>
  );
}
