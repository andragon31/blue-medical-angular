import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInCheckOutComponent } from './check-in-check-out/check-in-check-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractVehicleComponent } from './contract-vehicle/contract-vehicle.component';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'checkin_checkout/:option', component: CheckInCheckOutComponent},
  {path: 'contract_vehicle', component: ContractVehicleComponent},
  {path: 'generate_pdf', component: GeneratepdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
