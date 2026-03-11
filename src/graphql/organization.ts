import { gql } from '../generated/graphql';

/**
 * List organizations with pagination, optional search, status (All/Active/Inactive), and plan filter.
 * Schema: findAllOrgs(findAllOrgsInput: { paginationOptions, search?, status?, planId? }) -> OrgsPayload
 */
export const FIND_ALL_ORGS = gql(/* GraphQL */ `
  query FindAllOrgs($findAllOrgsInput: FindAllOrgsInput!) {
    findAllOrgs(findAllOrgsInput: $findAllOrgsInput) {
      organizations {
        id
        name
        status
        createdAt
        noOfUsers
        staffCount
        customersCount
        adminUser {
          id
          email
          firstName
          lastName
        }
        orgSubscription {
          id
          startDate
          endDate
          status
          subscriptionPlan {
            id
            name
          }
        }
      }
      pagination {
        page
        limit
        totalCount
        totalPages
      }
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Single organization by id for Edit page.
 * Schema: getOrg(getOrgInput: { id }) -> OrgPayload
 */
export const GET_ORG = gql(/* GraphQL */ `
  query GetOrg($getOrgInput: GetOrgInput!) {
    getOrg(getOrgInput: $getOrgInput) {
      organization {
        id
        name
        status
        noOfUsers
        description
        createdAt
        updatedAt
        staffCount
        customersCount
        adminUser {
          id
          email
          firstName
          lastName
          staffSelfAddress {
            id
            address1
            address2
            city
            zipCode
            phone
            stateId
            countryId
          }
        }
        address {
          id
          address1
          address2
          city
          zipCode
          phone
          stateId
          countryId
        }
        orgSubscription {
          id
          startDate
          endDate
          status
          subscriptionPlan {
            id
            name
            amount
          }
        }
      }
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Create organization with org details, admin user, and optional addresses.
 * Schema: createOrg(createOrgInput: { organization: OrgInput!, user: CreateUserInput!, orgAddress?, userAddress? }) -> OrgPayload
 */
export const CREATE_ORG = gql(/* GraphQL */ `
  mutation CreateOrg($createOrgInput: CreateOrgInput!) {
    createOrg(createOrgInput: $createOrgInput) {
      organization {
        id
        name
        status
      }
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Update organization (name, noOfUsers, status, etc.).
 * Schema: updateOrg(updateOrgInput: { id, name?, noOfUsers?, ... }) -> OrgPayload
 */
export const UPDATE_ORG = gql(/* GraphQL */ `
  mutation UpdateOrg($updateOrgInput: UpdateOrgInput!) {
    updateOrg(updateOrgInput: $updateOrgInput) {
      organization {
        id
        name
        noOfUsers
        status
      }
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Update organization contact/address info (org + address).
 * Schema: updateOrgInfo(updateOrgInfo: { org?, address? }) -> ResponsePayload
 * Note: API uses lowercase input type name "updateOrgInfo".
 */
export const UPDATE_ORG_INFO = gql(/* GraphQL */ `
  mutation UpdateOrgInfo($updateOrgInfo: updateOrgInfo!) {
    updateOrgInfo(updateOrgInfo: $updateOrgInfo) {
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Update admin user and address for an organization.
 * Schema: updateAdminInfo(updateAdminInfo: { user?, address? }) -> ResponsePayload
 * Note: API uses lowercase input type name "updateAdminInfo".
 */
export const UPDATE_ADMIN_INFO = gql(/* GraphQL */ `
  mutation UpdateAdminInfo($updateAdminInfo: updateAdminInfo!) {
    updateAdminInfo(updateAdminInfo: $updateAdminInfo) {
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Delete (deactivate) organization.
 * Schema: deleteOrg(deleteOrgInput: { id }) -> OrgPayload
 */
export const DELETE_ORG = gql(/* GraphQL */ `
  mutation DeleteOrg($deleteOrgInput: DeleteOrgInput!) {
    deleteOrg(deleteOrgInput: $deleteOrgInput) {
      organization {
        id
      }
      response {
        status
        message
        error
      }
    }
  }
`);

/**
 * Subscription plans for Packages dropdown (list filter) and create flow.
 */
export const FIND_ALL_SUBSCRIPTION_PLANS = gql(/* GraphQL */ `
  query FindAllSubscriptionPlans($findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput!) {
    findAllSubscriptionPlans(findAllSubscriptionPlansInput: $findAllSubscriptionPlansInput) {
      subscriptionPlans {
        id
        name
      }
      pagination {
        totalCount
      }
    }
  }
`);
