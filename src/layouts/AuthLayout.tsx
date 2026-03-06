import { Outlet } from 'react-router-dom';
import { AUTH_LOGO_REFINERY } from '../assets/auth-assets';

/**
 * Layout for auth screens – Figma design shell.
 * Full-page white, Refinery logo top-left, centered content (max 480px for forms).
 * Nodes: 325:32909 (Login), 325:32912 (Forgot), 325:32915 (Request sent), 615:146472 (Password set).
 */
export default function AuthLayout() {
  return (
    <div className="auth-module min-h-screen bg-white relative">
      <a
        href="/"
        className="absolute left-[58px] top-[63px] h-[23px] w-[163px] flex items-center justify-center"
        aria-label="Refinery home"
      >
        <img
          src={AUTH_LOGO_REFINERY}
          alt="Refinery"
          className="max-h-full w-auto object-contain"
        />
      </a>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 pt-24">
        <div className="w-full max-w-[480px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
