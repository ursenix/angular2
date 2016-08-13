
import { provideRouter } from '@angular/router';
import {EmployeeComponent} from './employee/emp.component';
import {VehicleComponent} from './vehicle/vehicle.component';


export const routes = [
  { path: '', component: EmployeeComponent, terminal: true },
  { path: 'employee', component: EmployeeComponent },
  { path: 'vehicle', component: VehicleComponent }
  //{ path: 'profile', component: ProfileComponent }
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);