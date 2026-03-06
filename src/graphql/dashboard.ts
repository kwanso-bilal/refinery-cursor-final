import { gql } from '../generated/graphql';

/**
 * Super admin dashboard stats: registeredOrgs, totalRevenue, currentMonthRevenue
 */
export const GET_SUPER_ADMIN_DASHBOARD = gql(/* GraphQL */ `
  query GetSuperAdminDashboard {
    getSuperAdminDashboard {
      registeredOrgs
      totalRevenue
      currentMonthRevenue
    }
  }
`);

/**
 * Revenue chart: lastYearRevenue and thisYearRevenue by month
 */
export const GET_SUPER_ADMIN_CHART = gql(/* GraphQL */ `
  query GetSuperAdminChart {
    getSuperAdminChart {
      lastYearRevenue {
        month
        revenue
      }
      thisYearRevenue {
        month
        revenue
      }
    }
  }
`);

/**
 * Recent grand invoices for dashboard list
 */
export const FIND_ALL_GRAND_INVOICES = gql(/* GraphQL */ `
  query FindAllGrandInvoices($findAllGrandInvoicesInput: FindAllGrandInvoicesInput!) {
    findAllGrandInvoices(findAllGrandInvoicesInput: $findAllGrandInvoicesInput) {
      grandInvoices {
        id
        amount
        billableAmount
        createdAt
        status
        customer {
          name
        }
      }
      pagination {
        totalCount
        page
        totalPages
      }
    }
  }
`);
