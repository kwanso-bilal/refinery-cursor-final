/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  mutation LoginCustomer($customerLoginInput: CustomerLoginInput!) {\n    loginCustomer(customerLoginInput: $customerLoginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n": typeof types.LoginCustomerDocument,
    "\n  mutation CustomerForgotPassword($customerForgotPasswordInput: CustomerForgotPasswordInput!) {\n    customerForgotPassword(customerForgotPasswordInput: $customerForgotPasswordInput) {\n      response {\n        message\n        status\n      }\n    }\n  }\n": typeof types.CustomerForgotPasswordDocument,
    "\n  query FetchStaff {\n    fetchStaff {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n": typeof types.FetchStaffDocument,
    "\n  query FetchUser {\n    fetchUser {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n": typeof types.FetchUserDocument,
    "\n  query GetSuperAdminDashboard {\n    getSuperAdminDashboard {\n      registeredOrgs\n      totalRevenue\n      currentMonthRevenue\n    }\n  }\n": typeof types.GetSuperAdminDashboardDocument,
    "\n  query GetSuperAdminChart {\n    getSuperAdminChart {\n      lastYearRevenue {\n        month\n        revenue\n      }\n      thisYearRevenue {\n        month\n        revenue\n      }\n    }\n  }\n": typeof types.GetSuperAdminChartDocument,
    "\n  query FindAllGrandInvoices($findAllGrandInvoicesInput: FindAllGrandInvoicesInput!) {\n    findAllGrandInvoices(findAllGrandInvoicesInput: $findAllGrandInvoicesInput) {\n      grandInvoices {\n        id\n        amount\n        billableAmount\n        createdAt\n        status\n        customer {\n          name\n        }\n      }\n      pagination {\n        totalCount\n        page\n        totalPages\n      }\n    }\n  }\n": typeof types.FindAllGrandInvoicesDocument,
};
const documents: Documents = {
    "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation LoginCustomer($customerLoginInput: CustomerLoginInput!) {\n    loginCustomer(customerLoginInput: $customerLoginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n": types.LoginCustomerDocument,
    "\n  mutation CustomerForgotPassword($customerForgotPasswordInput: CustomerForgotPasswordInput!) {\n    customerForgotPassword(customerForgotPasswordInput: $customerForgotPasswordInput) {\n      response {\n        message\n        status\n      }\n    }\n  }\n": types.CustomerForgotPasswordDocument,
    "\n  query FetchStaff {\n    fetchStaff {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n": types.FetchStaffDocument,
    "\n  query FetchUser {\n    fetchUser {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n": types.FetchUserDocument,
    "\n  query GetSuperAdminDashboard {\n    getSuperAdminDashboard {\n      registeredOrgs\n      totalRevenue\n      currentMonthRevenue\n    }\n  }\n": types.GetSuperAdminDashboardDocument,
    "\n  query GetSuperAdminChart {\n    getSuperAdminChart {\n      lastYearRevenue {\n        month\n        revenue\n      }\n      thisYearRevenue {\n        month\n        revenue\n      }\n    }\n  }\n": types.GetSuperAdminChartDocument,
    "\n  query FindAllGrandInvoices($findAllGrandInvoicesInput: FindAllGrandInvoicesInput!) {\n    findAllGrandInvoices(findAllGrandInvoicesInput: $findAllGrandInvoicesInput) {\n      grandInvoices {\n        id\n        amount\n        billableAmount\n        createdAt\n        status\n        customer {\n          name\n        }\n      }\n      pagination {\n        totalCount\n        page\n        totalPages\n      }\n    }\n  }\n": types.FindAllGrandInvoicesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($loginInput: LoginInput!) {\n    login(loginInput: $loginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginCustomer($customerLoginInput: CustomerLoginInput!) {\n    loginCustomer(customerLoginInput: $customerLoginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginCustomer($customerLoginInput: CustomerLoginInput!) {\n    loginCustomer(customerLoginInput: $customerLoginInput) {\n      token\n      response {\n        message\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CustomerForgotPassword($customerForgotPasswordInput: CustomerForgotPasswordInput!) {\n    customerForgotPassword(customerForgotPasswordInput: $customerForgotPasswordInput) {\n      response {\n        message\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CustomerForgotPassword($customerForgotPasswordInput: CustomerForgotPasswordInput!) {\n    customerForgotPassword(customerForgotPasswordInput: $customerForgotPasswordInput) {\n      response {\n        message\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchStaff {\n    fetchStaff {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchStaff {\n    fetchStaff {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchUser {\n    fetchUser {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchUser {\n    fetchUser {\n      user {\n        id\n        email\n        firstName\n        lastName\n        userType\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSuperAdminDashboard {\n    getSuperAdminDashboard {\n      registeredOrgs\n      totalRevenue\n      currentMonthRevenue\n    }\n  }\n"): (typeof documents)["\n  query GetSuperAdminDashboard {\n    getSuperAdminDashboard {\n      registeredOrgs\n      totalRevenue\n      currentMonthRevenue\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSuperAdminChart {\n    getSuperAdminChart {\n      lastYearRevenue {\n        month\n        revenue\n      }\n      thisYearRevenue {\n        month\n        revenue\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSuperAdminChart {\n    getSuperAdminChart {\n      lastYearRevenue {\n        month\n        revenue\n      }\n      thisYearRevenue {\n        month\n        revenue\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindAllGrandInvoices($findAllGrandInvoicesInput: FindAllGrandInvoicesInput!) {\n    findAllGrandInvoices(findAllGrandInvoicesInput: $findAllGrandInvoicesInput) {\n      grandInvoices {\n        id\n        amount\n        billableAmount\n        createdAt\n        status\n        customer {\n          name\n        }\n      }\n      pagination {\n        totalCount\n        page\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindAllGrandInvoices($findAllGrandInvoicesInput: FindAllGrandInvoicesInput!) {\n    findAllGrandInvoices(findAllGrandInvoicesInput: $findAllGrandInvoicesInput) {\n      grandInvoices {\n        id\n        amount\n        billableAmount\n        createdAt\n        status\n        customer {\n          name\n        }\n      }\n      pagination {\n        totalCount\n        page\n        totalPages\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;