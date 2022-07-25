import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckInCheckOutComponent } from './check-in-check-out/check-in-check-out.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ContractVehicleComponent } from './contract-vehicle/contract-vehicle.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    CheckInCheckOutComponent,
    HeaderComponent,
    DashboardComponent,
    ContractVehicleComponent,
    GeneratepdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    BlockUIModule.forRoot()
  ],
  exports: [CheckInCheckOutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
