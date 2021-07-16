import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Used for the Top and Side Nav bar
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components 
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Expansion } from '@angular/compiler';
import { SideNavSubitemComponent } from './side-nav-subitem/side-nav-subitem.component';
import { VariancesSubitemComponent } from './variances-subitem/variances-subitem.component';
import { DenialsComponent } from './denials/denials.component';
import { ExplorationItemComponent } from './exploration-item/exploration-item.component';
import { FooterComponent } from './footer/footer.component';
import { RevCycComponent } from './rev-cyc/rev-cyc.component';
import { RouterModule } from '@angular/router';
import { DiaNaComponent } from './dia-na/dia-na.component';
import { TrendsNavComponent } from './trends-nav/trends-nav.component';
import { PhyPerformanceNavComponent } from './phy-performance-nav/phy-performance-nav.component';
import { BillingNavComponent } from './billing-nav/billing-nav.component';
import { ReimburNavComponent } from './reimbur-nav/reimbur-nav.component';
import { DenialsNavComponent } from './denials-nav/denials-nav.component';
import { MarginsNavComponent } from './margins-nav/margins-nav.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ReimVarianceNavComponent } from './reim-variance-nav/reim-variance-nav.component';
import { CustomerSupportNavComponent } from './customer-support-nav/customer-support-nav.component';
import { TrainingMenuNavComponent } from './training-menu-nav/training-menu-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardLookerComponent } from './invoiceDashboard/dashboard-looker/dashboard-looker.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    DashboardComponent,
    SideNavSubitemComponent,
    VariancesSubitemComponent,
    DenialsComponent,
    ExplorationItemComponent,
    FooterComponent,
    RevCycComponent,
    DiaNaComponent,
    TrendsNavComponent,
    PhyPerformanceNavComponent,
    BillingNavComponent,
    ReimburNavComponent,
    DenialsNavComponent,
    MarginsNavComponent,
    MyAccountComponent,
    ReimVarianceNavComponent,
    CustomerSupportNavComponent,
    TrainingMenuNavComponent,
    DashboardLookerComponent,
    
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
