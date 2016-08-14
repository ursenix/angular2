
//import { provideRouter } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/emp.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {VehicleDetailComponent} from './vehicle/vehicleDetail.component';

export const AppRoutes:Routes = [
  { path: '', component: EmployeeComponent }, //, terminal: true },
  { path: 'employee', component: EmployeeComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'vehicle/:id', component: VehicleDetailComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(AppRoutes);

//export const APP_ROUTES_PROVIDER = provideRouter(routes);