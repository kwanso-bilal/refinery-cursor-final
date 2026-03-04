import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import * as authService from '../services/auth';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

type AuthContextValue = AuthState & {
  login: (credentials: authService.LoginCredentials) => Promise<authService.AuthResponse>;
  logout: () => void;
  forgotPassword: (
    input: authService.ForgotPasswordInput
  ) => Promise<authService.AuthResponse>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const AUTH_TOKEN_KEY = 'refinery_auth_token';

function getIsAuthenticated(): boolean {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: getIsAuthenticated(),
    isLoading: true,
  });

  useEffect(() => {
    setState((s) => ({ ...s, isAuthenticated: getIsAuthenticated(), isLoading: false }));
  }, []);

  const login = useCallback(async (credentials: authService.LoginCredentials) => {
    const result = await authService.login(credentials);
    if (result.success) {
      setState((s) => ({ ...s, isAuthenticated: true }));
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setState((s) => ({ ...s, isAuthenticated: false }));
  }, []);

  const forgotPassword = useCallback(
    async (input: authService.ForgotPasswordInput) =>
      authService.forgotPassword(input),
    []
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      logout,
      forgotPassword,
    }),
    [state.isAuthenticated, state.isLoading, login, logout, forgotPassword]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
