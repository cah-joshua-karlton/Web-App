import { Category } from "../interfaces/Category";
import { DIAGNOSISEXPLORATION } from "./PatientExploration";
import { PHYSICIANPERFORMANCE } from "./PhysicianPerformance";
import { REVENUE_CYCLE } from "./revenue-cycle";
import { TRENDS } from "./trends";

export const NAVIGATION_DATA: Category[] = [
    // Navigation_Data is the Total / Main Tree
    REVENUE_CYCLE,
    DIAGNOSISEXPLORATION,
    PHYSICIANPERFORMANCE,
    TRENDS

]