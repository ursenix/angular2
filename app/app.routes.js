"use strict";
var router_1 = require('@angular/router');
var emp_component_1 = require('./employee/emp.component');
var vehicle_component_1 = require('./vehicle/vehicle.component');
exports.routes = [
    { path: '', component: emp_component_1.EmployeeComponent, terminal: true },
    { path: 'employee', component: emp_component_1.EmployeeComponent },
    { path: 'vehicle', component: vehicle_component_1.VehicleComponent }
];
exports.APP_ROUTES_PROVIDER = router_1.provideRouter(exports.routes);
//# sourceMappingURL=app.routes.js.map