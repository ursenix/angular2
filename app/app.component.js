"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vehicle_service_1 = require('./vehicle/vehicle-service');
var emp_service_1 = require('./employee/emp.service');
var AppComponent = (function () {
    function AppComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.title = 'Sample App';
        this.hero = 'Senthil';
        this.vehicleService = vehicleService;
        //this.getVehicle();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getVehicle();
    };
    AppComponent.prototype.getVehicle = function () {
        this.vehicle = this.vehicleService.getNewVehicle();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/vehicle/vehicle-list.html',
            providers: [vehicle_service_1.VehicleService, emp_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map