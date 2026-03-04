import { Outlet } from 'react-router-dom';

/**
 * Layout for auth screens (login, forgot password).
 * Centered card, no main app header/footer.
 * Figma design node (shell): node-id=615-146472
 * https://www.figma.com/design/FtKDWB8xoEiu9U0nwWMNKd/Refinery---Tracking-Unlimited?node-id=615-146472
 */
export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
