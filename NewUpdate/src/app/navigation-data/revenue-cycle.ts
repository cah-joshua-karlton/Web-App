import { Category } from '../interfaces/Category';

const BILLING: Category = {
  name: 'Billing Reconciliation',
  route: '/',
  subcategories: [
    { name: 'Unbilled Dispenses', route: '/' },
    { name: 'Drug Reconiliation', route: '/' },
  ],
};

const REIMBURSEMENT: Category = {
  name: 'Reimbursement',
  route: '/',
  subcategories: [
    { name: 'Overall Reimbursement Insights', route: '/' },
    { name: 'Reimbursement Summary', route: '/' },
    { name: 'What is at Risk by Code', route: '/' },
    { name: 'Time to Payment', route: '/' },
    { name: 'Average Submit / Payment time', route: '/' },
  ],
};

const REIMBURSEMENTVARIANCES: Category = {
  name: 'Reimbursement Variances',
  route: '/varianceRem',
  subcategories: [
    { name: 'Billed Equals Allowed', route: '/' },
    { name: 'Allowed Less Than Medicare', route: '/' },
    { name: 'Remit Units < Claim Units', route: '/' },
    { name: 'Commercial Contract Variance', route: '/' },
  ],
};

const DENIALS: Category = {
  name: 'Denials',
  route: '/denials',
  subcategories: [
    { name: 'Overall Denials', route: '/' },
    { name: 'Denial Tracker', route: '/' },
  ],
};

const MARGIN: Category = {
  name: 'Margin',
  route: '/Margin',
  subcategories: [
    { name: 'Top Underwater', route: '/' },
    { name: 'Practice Profitability', route: '/' },
  ],
};

export const REVENUE_CYCLE: Category = {
  name: 'Revenue Cycle',
  route: '/',
  subcategories: [
    BILLING,
    REIMBURSEMENT,
    REIMBURSEMENTVARIANCES,
    DENIALS,
    MARGIN,

    // The Subcategories are the first child in the tree structure
  ],
};
