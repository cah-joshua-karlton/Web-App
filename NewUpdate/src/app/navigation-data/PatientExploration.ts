import { Category } from '../interfaces/Category';

const PatientPopulationInsights: Category = {
  name: 'Patient Population Insights',
  route: '/looker',
  subcategories: [
    { name: 'New & Current Patients Population', route: '/' },
    { name: 'Diagnosis & Procedure Codes', route: '/' },
  ],
};

export const DIAGNOSISEXPLORATION: Category = {
  name: 'Diagnosis / Patient Exploration',
  route: '/',
  subcategories: [
    PatientPopulationInsights,

    // The Subcategories are the first child in the tree structure
  ],
};
