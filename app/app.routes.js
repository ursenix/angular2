"use strict";
var router_1 = require('@angular/router');
var emp_component_1 = require('./employee/emp.component');
var vehicle_component_1 = require('./vehicle/vehicle.component');
var vehicleDetail_component_1 = require('./vehicle/vehicleDetail.component');
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
var AppRoutes = [
    { path: '', component: emp_component_1.EmployeeComponent },
    { path: 'vehicles', component: vehicle_component_1.VehicleComponent },
    { path: 'vehicle/:id', component: vehicleDetail_component_1.VehicleDetailComponent }
];
exports.appRoutingProviders = [];
console.log(AppRoutes);
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//export const APP_ROUTES_PROVIDER = provideRouter(routes); 
//# sourceMappingURL=app.routes.js.map