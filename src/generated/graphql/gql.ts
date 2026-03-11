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
    "\n  query FindAllOrgs($findAllOrgsInput: FindAllOrgsInput!) {\n    findAllOrgs(findAllOrgsInput: $findAllOrgsInput) {\n      organizations {\n        id\n        name\n        status\n        createdAt\n        noOfUsers\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n          }\n        }\n      }\n      pagination {\n        page\n        limit\n        totalCount\n        totalPages\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.FindAllOrgsDocument,
    "\n  query GetOrg($getOrgInput: GetOrgInput!) {\n    getOrg(getOrgInput: $getOrgInput) {\n      organization {\n        id\n        name\n        status\n        noOfUsers\n        description\n        createdAt\n        updatedAt\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n          staffSelfAddress {\n            id\n            address1\n            address2\n            city\n            zipCode\n            phone\n            stateId\n            countryId\n          }\n        }\n        address {\n          id\n          address1\n          address2\n          city\n          zipCode\n          phone\n          stateId\n          countryId\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n            amount\n          }\n        }\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.GetOrgDocument,
    "\n  mutation CreateOrg($createOrgInput: CreateOrgInput!) {\n    createOrg(createOrgInput: $createOrgInput) {\n      organization {\n        id\n        name\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.CreateOrgDocument,
    "\n  mutation UpdateOrg($updateOrgInput: UpdateOrgInput!) {\n    updateOrg(updateOrgInput: $updateOrgInput) {\n      organization {\n        id\n        name\n        noOfUsers\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.UpdateOrgDocument,
    "\n  mutation UpdateOrgInfo($updateOrgInfo: updateOrgInfo!) {\n    updateOrgInfo(updateOrgInfo: $updateOrgInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.UpdateOrgInfoDocument,
    "\n  mutation UpdateAdminInfo($updateAdminInfo: updateAdminInfo!) {\n    updateAdminInfo(updateAdminInfo: $updateAdminInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.UpdateAdminInfoDocument,
    "\n  mutation DeleteOrg($deleteOrgInput: DeleteOrgInput!) {\n    deleteOrg(deleteOrgInput: $deleteOrgInput) {\n      organization {\n        id\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": typeof types.DeleteOrgDocument,
    "\n  query FindAllSubscriptionPlans($findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput!) {\n    findAllSubscriptionPlans(findAllSubscriptionPlansInput: $findAllSubscriptionPlansInput) {\n      subscriptionPlans {\n        id\n        name\n      }\n      pagination {\n        totalCount\n      }\n    }\n  }\n": typeof types.FindAllSubscriptionPlansDocument,
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
    "\n  query FindAllOrgs($findAllOrgsInput: FindAllOrgsInput!) {\n    findAllOrgs(findAllOrgsInput: $findAllOrgsInput) {\n      organizations {\n        id\n        name\n        status\n        createdAt\n        noOfUsers\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n          }\n        }\n      }\n      pagination {\n        page\n        limit\n        totalCount\n        totalPages\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.FindAllOrgsDocument,
    "\n  query GetOrg($getOrgInput: GetOrgInput!) {\n    getOrg(getOrgInput: $getOrgInput) {\n      organization {\n        id\n        name\n        status\n        noOfUsers\n        description\n        createdAt\n        updatedAt\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n          staffSelfAddress {\n            id\n            address1\n            address2\n            city\n            zipCode\n            phone\n            stateId\n            countryId\n          }\n        }\n        address {\n          id\n          address1\n          address2\n          city\n          zipCode\n          phone\n          stateId\n          countryId\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n            amount\n          }\n        }\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.GetOrgDocument,
    "\n  mutation CreateOrg($createOrgInput: CreateOrgInput!) {\n    createOrg(createOrgInput: $createOrgInput) {\n      organization {\n        id\n        name\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.CreateOrgDocument,
    "\n  mutation UpdateOrg($updateOrgInput: UpdateOrgInput!) {\n    updateOrg(updateOrgInput: $updateOrgInput) {\n      organization {\n        id\n        name\n        noOfUsers\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.UpdateOrgDocument,
    "\n  mutation UpdateOrgInfo($updateOrgInfo: updateOrgInfo!) {\n    updateOrgInfo(updateOrgInfo: $updateOrgInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.UpdateOrgInfoDocument,
    "\n  mutation UpdateAdminInfo($updateAdminInfo: updateAdminInfo!) {\n    updateAdminInfo(updateAdminInfo: $updateAdminInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.UpdateAdminInfoDocument,
    "\n  mutation DeleteOrg($deleteOrgInput: DeleteOrgInput!) {\n    deleteOrg(deleteOrgInput: $deleteOrgInput) {\n      organization {\n        id\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n": types.DeleteOrgDocument,
    "\n  query FindAllSubscriptionPlans($findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput!) {\n    findAllSubscriptionPlans(findAllSubscriptionPlansInput: $findAllSubscriptionPlansInput) {\n      subscriptionPlans {\n        id\n        name\n      }\n      pagination {\n        totalCount\n      }\n    }\n  }\n": types.FindAllSubscriptionPlansDocument,
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
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindAllOrgs($findAllOrgsInput: FindAllOrgsInput!) {\n    findAllOrgs(findAllOrgsInput: $findAllOrgsInput) {\n      organizations {\n        id\n        name\n        status\n        createdAt\n        noOfUsers\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n          }\n        }\n      }\n      pagination {\n        page\n        limit\n        totalCount\n        totalPages\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindAllOrgs($findAllOrgsInput: FindAllOrgsInput!) {\n    findAllOrgs(findAllOrgsInput: $findAllOrgsInput) {\n      organizations {\n        id\n        name\n        status\n        createdAt\n        noOfUsers\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n          }\n        }\n      }\n      pagination {\n        page\n        limit\n        totalCount\n        totalPages\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrg($getOrgInput: GetOrgInput!) {\n    getOrg(getOrgInput: $getOrgInput) {\n      organization {\n        id\n        name\n        status\n        noOfUsers\n        description\n        createdAt\n        updatedAt\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n          staffSelfAddress {\n            id\n            address1\n            address2\n            city\n            zipCode\n            phone\n            stateId\n            countryId\n          }\n        }\n        address {\n          id\n          address1\n          address2\n          city\n          zipCode\n          phone\n          stateId\n          countryId\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n            amount\n          }\n        }\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrg($getOrgInput: GetOrgInput!) {\n    getOrg(getOrgInput: $getOrgInput) {\n      organization {\n        id\n        name\n        status\n        noOfUsers\n        description\n        createdAt\n        updatedAt\n        staffCount\n        customersCount\n        adminUser {\n          id\n          email\n          firstName\n          lastName\n          staffSelfAddress {\n            id\n            address1\n            address2\n            city\n            zipCode\n            phone\n            stateId\n            countryId\n          }\n        }\n        address {\n          id\n          address1\n          address2\n          city\n          zipCode\n          phone\n          stateId\n          countryId\n        }\n        orgSubscription {\n          id\n          startDate\n          endDate\n          status\n          subscriptionPlan {\n            id\n            name\n            amount\n          }\n        }\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateOrg($createOrgInput: CreateOrgInput!) {\n    createOrg(createOrgInput: $createOrgInput) {\n      organization {\n        id\n        name\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrg($createOrgInput: CreateOrgInput!) {\n    createOrg(createOrgInput: $createOrgInput) {\n      organization {\n        id\n        name\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateOrg($updateOrgInput: UpdateOrgInput!) {\n    updateOrg(updateOrgInput: $updateOrgInput) {\n      organization {\n        id\n        name\n        noOfUsers\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateOrg($updateOrgInput: UpdateOrgInput!) {\n    updateOrg(updateOrgInput: $updateOrgInput) {\n      organization {\n        id\n        name\n        noOfUsers\n        status\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateOrgInfo($updateOrgInfo: updateOrgInfo!) {\n    updateOrgInfo(updateOrgInfo: $updateOrgInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateOrgInfo($updateOrgInfo: updateOrgInfo!) {\n    updateOrgInfo(updateOrgInfo: $updateOrgInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAdminInfo($updateAdminInfo: updateAdminInfo!) {\n    updateAdminInfo(updateAdminInfo: $updateAdminInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAdminInfo($updateAdminInfo: updateAdminInfo!) {\n    updateAdminInfo(updateAdminInfo: $updateAdminInfo) {\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteOrg($deleteOrgInput: DeleteOrgInput!) {\n    deleteOrg(deleteOrgInput: $deleteOrgInput) {\n      organization {\n        id\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteOrg($deleteOrgInput: DeleteOrgInput!) {\n    deleteOrg(deleteOrgInput: $deleteOrgInput) {\n      organization {\n        id\n      }\n      response {\n        status\n        message\n        error\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindAllSubscriptionPlans($findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput!) {\n    findAllSubscriptionPlans(findAllSubscriptionPlansInput: $findAllSubscriptionPlansInput) {\n      subscriptionPlans {\n        id\n        name\n      }\n      pagination {\n        totalCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindAllSubscriptionPlans($findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput!) {\n    findAllSubscriptionPlans(findAllSubscriptionPlansInput: $findAllSubscriptionPlansInput) {\n      subscriptionPlans {\n        id\n        name\n      }\n      pagination {\n        totalCount\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;