/**
 * Route path constants. Use these for <Route path>, <Link to>, and redirects.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
