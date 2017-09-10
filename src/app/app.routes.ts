import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'forms', component: FormsComponent },
];
