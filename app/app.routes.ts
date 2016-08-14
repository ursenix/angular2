
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/emp.component';
import {VehicleComponent} from './vehicle/vehicle.component';
 import {VehicleDetailComponent} from './vehicle/vehicleDetail.component';

// const empRoutes : Routes = [
// {
//     path: '',
//     //redirectTo: '/employees',
//     pathMatch: 'full',
//     component: EmployeeComponent
// },
// {
//     path: 'employee-details',
//     loadChildren: 'app/employee/emp.module#EmployeeModule'
// }    
// ];

const AppRoutes:Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'vehicles', component: VehicleComponent },
   { path: 'vehicle/:id', component: VehicleDetailComponent }
  //{ path: '**', component: PageNotFoundComponent }
  //...empRoutes
];

export const appRoutingProviders: any[] = [

];
console.log(AppRoutes);
export const routing = RouterModule.forRoot(AppRoutes);

//export const APP_ROUTES_PROVIDER = provideRouter(routes);