import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';

const routes: Routes = [
  { path: '', component: IndexDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

