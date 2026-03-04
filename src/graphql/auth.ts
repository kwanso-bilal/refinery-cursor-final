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
