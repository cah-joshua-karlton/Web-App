import { Category } from '../interfaces/Category';




export const TRENDS: Category = {
  name: 'Trends',
  route: '/TrendsNav',
  subcategories: [
    {name: 'Revenue Cycle', route: '/'},
    {name: 'Margin', route: '/'},
    {name: 'Reconciliation', route: '/'},
    {name: 'Diagnosis', route: '/'},
    {name: 'Drug Comparison', route: '/'},

    // The Subcategories are the first child in the tree structure

],
};