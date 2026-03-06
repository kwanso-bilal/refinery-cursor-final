import { gql } from '../generated/graphql';

/**
 * Staff/admin login with email + password.
 * Schema: login(loginInput: { email, password }) -> LoginPayload { token, response }
 */
export const LOGIN = gql(/* GraphQL */ `
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      response {
        message
        status
      }
    }
  }
`);

/**
 * Customer login. Returns token for Authorization header.
 * Schema: loginCustomer(customerLoginInput: { userName, password }) -> LoginPayload { token, response }
 */
export const LOGIN_CUSTOMER = gql(/* GraphQL */ `
  mutation LoginCustomer($customerLoginInput: CustomerLoginInput!) {
    loginCustomer(customerLoginInput: $customerLoginInput) {
      token
      response {
        message
        status
      }
    }
  }
`);

/**
 * Customer forgot password. Sends reset to userName (email).
 * Schema: customerForgotPassword(customerForgotPasswordInput: { userName }) -> ForgotPasswordPayload
 */
export const CUSTOMER_FORGOT_PASSWORD = gql(/* GraphQL */ `
  mutation CustomerForgotPassword($customerForgotPasswordInput: CustomerForgotPasswordInput!) {
    customerForgotPassword(customerForgotPasswordInput: $customerForgotPasswordInput) {
      response {
        message
        status
      }
    }
  }
`);

/**
 * Current staff/user (from auth token). Use for sidebar role and name.
 * Schema: fetchStaff -> UserPayload { user { userType, firstName, lastName, email } }
 */
export const FETCH_STAFF = gql(/* GraphQL */ `
  query FetchStaff {
    fetchStaff {
      user {
        id
        email
        firstName
        lastName
        userType
      }
    }
  }
`);

/**
 * Alternative current user (some tokens may resolve via fetchUser e.g. admin).
 */
export const FETCH_USER = gql(/* GraphQL */ `
  query FetchUser {
    fetchUser {
      user {
        id
        email
        firstName
        lastName
        userType
      }
    }
  }
`);
