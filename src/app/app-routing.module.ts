import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { CardHelpfulComponent } from './shared/card-helpful/card-helpful.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'barchart', component: BarChartComponent },
  { path: 'card-helpful', component: CardHelpfulComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
