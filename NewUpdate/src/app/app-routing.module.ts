import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingNavComponent } from './billing-nav/billing-nav.component';
import { CustomerSupportNavComponent } from './customer-support-nav/customer-support-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DenialsNavComponent } from './denials-nav/denials-nav.component';
import { DiaNaComponent } from './dia-na/dia-na.component';
import { DashboardLookerComponent } from './invoiceDashboard/dashboard-looker/dashboard-looker.component';
import { MarginsNavComponent } from './margins-nav/margins-nav.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PhyPerformanceNavComponent } from './phy-performance-nav/phy-performance-nav.component';
import { ReimVarianceNavComponent } from './reim-variance-nav/reim-variance-nav.component';
import { ReimburNavComponent } from './reimbur-nav/reimbur-nav.component';
import { RevCycComponent } from './rev-cyc/rev-cyc.component';
import { TrainingMenuNavComponent } from './training-menu-nav/training-menu-nav.component';
import { TrendsNavComponent } from './trends-nav/trends-nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'revenueCycle',
    component: RevCycComponent,
  },

  {
    path: 'DiagnosisNav',
    component: DiaNaComponent,
  },

  {
    path: 'TrendsNav',
    component: TrendsNavComponent,
  },

  {
    path: 'Physician Performance',
    component: PhyPerformanceNavComponent,
  },

  {
    path: 'Billing',
    component: BillingNavComponent,
  },

  {
    path: 'denials',
    component: DenialsNavComponent,
  },
  {
    path: 'reimbursement',
    component: ReimburNavComponent,
  },
  {
    path: 'Margin',
    component: MarginsNavComponent,
  },

  {
    path: 'varianceRem',
    component: ReimVarianceNavComponent,
  },

  {
    path: 'account',
    component: MyAccountComponent,
  },
  {
    path: 'support',
    component: CustomerSupportNavComponent,
  },
  {
    path: 'training',
    component: TrainingMenuNavComponent,
  },
  {
    path: 'looker',
    component: DashboardLookerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
