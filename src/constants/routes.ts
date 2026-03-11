/**
 * Route path constants. Use these for <Route path>, <Link to>, and redirects.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  FORGOT_PASSWORD_SENT: '/forgot-password/sent',
  PASSWORD_SET: '/password-set',
  DASHBOARD: '/dashboard',
  ORGANIZATIONS: '/organizations',
  ORGANIZATIONS_INVITE: '/organizations/invite',
  ORGANIZATIONS_EDIT: '/organizations/:id/edit',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Build edit organization path from id */
export function orgEditPath(id: string): string {
  return `/organizations/${id}/edit`;
}
