
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
// import { EmployeeComponent } from './employee/emp.component';
//  import { VehicleComponent } from './vehicle/vehicle.component';
//  import { VehicleDetailComponent } from './vehicle/vehicleDetail.component';

import { EmployeeModule } from './employee/emp.module';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  
  imports: [
    BrowserModule,
    routing,
    EmployeeModule
  ],
  
  declarations: [
    AppComponent,
  ],
  
  providers: [
    appRoutingProviders
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule {
}