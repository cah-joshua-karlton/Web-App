import { Category } from '../interfaces/Category';

export const PHYSICIANPERFORMANCE: Category = {
  name: 'Physician Performance',
  route: '/Physician Performance',
  subcategories: [
    { name: 'Dashboard', route: '/' },
    { name: 'Modifiers', route: '/' },
    { name: 'RVU by Month', route: '/' },
    { name: 'RVU by MD CPT', route: '/' },

    // The Subcategories are the first child in the tree structure
  ],
};
