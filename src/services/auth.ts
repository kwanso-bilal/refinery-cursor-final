import { apolloClient, clearAuthToken, setAuthToken } from './apollo';
import {
  LoginDocument,
  CustomerForgotPasswordDocument,
} from '../generated/graphql/graphql';
import type { LoginMutation, CustomerForgotPasswordMutation } from '../generated/graphql/graphql';

/** Staff/admin login (email + password). */
export type LoginCredentials = {
  email: string;
  password: string;
};

export type ForgotPasswordInput = {
  userName: string;
};

export type AuthResponse = {
  success: boolean;
  message?: string;
};

/**
 * Log in (staff/admin: email + password). On success stores token and returns success.
 */
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const result = await apolloClient.mutate({
      mutation: LoginDocument,
      variables: {
        loginInput: {
          email: credentials.email.trim(),
          password: credentials.password,
        },
      },
    });

    const { data, errors } = result as {
      data?: LoginMutation;
      errors?: Array<{ message: string }>;
    };

    if (errors?.length) {
      return {
        success: false,
        message: errors[0].message ?? 'Login failed',
      };
    }

    const token = data?.login?.token;
    if (!token) {
      return {
        success: false,
        message: data?.login?.response?.message ?? 'No token received',
      };
    }

    setAuthToken(token);
    return { success: true };
  } catch (err: unknown) {
    const message =
      err && typeof err === 'object' && 'message' in err
        ? String((err as { message: unknown }).message)
        : 'Login failed';
    return { success: false, message };
  }
}

/**
 * Request password reset for customer (by userName/email).
 */
export async function forgotPassword(
  input: ForgotPasswordInput
): Promise<AuthResponse> {
  try {
    const result = await apolloClient.mutate({
      mutation: CustomerForgotPasswordDocument,
      variables: {
        customerForgotPasswordInput: {
          userName: input.userName.trim(),
        },
      },
    });

    const { data, errors } = result as {
      data?: CustomerForgotPasswordMutation;
      errors?: Array<{ message: string }>;
    };

    if (errors?.length) {
      return {
        success: false,
        message: errors[0].message ?? 'Request failed',
      };
    }

    const message = data?.customerForgotPassword?.response?.message;
    return {
      success: true,
      message: message ?? 'If an account exists, you will receive reset instructions.',
    };
  } catch (err: unknown) {
    const message =
      err && typeof err === 'object' && 'message' in err
        ? String((err as { message: unknown }).message)
        : 'Request failed';
    return { success: false, message };
  }
}

/**
 * Log out: clear token and optionally reset Apollo cache.
 */
export function logout(): void {
  clearAuthToken();
  void apolloClient.resetStore();
}
