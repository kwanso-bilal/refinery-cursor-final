import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { IconCheckCircle } from '../../assets/auth-assets';

/**
 * Password successfully set – Figma node 615:146472 (Auth/Form/NewPassword – Password Set).
 * Check circle icon, "Password Successfully Set!", body text, Go To Sign In button.
 */
export default function PasswordSetPage() {
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <div className="h-[120px] w-[120px] shrink-0">
        <IconCheckCircle className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h1
          className="font-bold text-[32px] leading-[48px] text-[var(--auth-text-primary)] w-full max-w-[480px]"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          Password Successfully Set!
        </h1>
        <p
          className="font-normal text-base leading-6 text-[var(--auth-text-secondary)] w-full max-w-[480px]"
          style={{ fontFamily: 'Public Sans, sans-serif' }}
        >
          Your new password has been securely saved. Please make sure to remember this password, as it will be necessary to log in to your account in the future.
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
