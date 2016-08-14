"use strict";
//import { provideRouter } from '@angular/router';
var router_1 = require('@angular/router');
var emp_component_1 = require('./employee/emp.component');
var vehicle_component_1 = require('./vehicle/vehicle.component');
var vehicleDetail_component_1 = require('./vehicle/vehicleDetail.component');
exports.AppRoutes = [
    { path: '', component: emp_component_1.EmployeeComponent },
    { path: 'employee', component: emp_component_1.EmployeeComponent },
    { path: 'vehicle', component: vehicle_component_1.VehicleComponent },
    { path: 'vehicle/:id', component: vehicleDetail_component_1.VehicleDetailComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.AppRoutes);
//export const APP_ROUTES_PROVIDER = provideRouter(routes); 
//# sourceMappingURL=app.routes.js.map