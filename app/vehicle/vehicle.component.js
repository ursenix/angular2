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
//import { ROUTER_DIRECTIVES, RouterLink } from '@angular/router';
var router_1 = require('@angular/router');
var vehicle_service_1 = require('./vehicle-service');
var VehicleComponent = (function () {
    function VehicleComponent(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
        console.log("Vehicle Service constructor..");
    }
    VehicleComponent.prototype.ngOnInit = function () {
        this.loadVehicles();
        console.log(this.vehicles);
    };
    VehicleComponent.prototype.loadVehicles = function () {
        this.vehicles = this.vehicleService.getVehicles();
    };
    VehicleComponent.prototype.gotoVehicle = function (vehicle) {
        this.router.navigate(['/vehicle', vehicle.regNumber]);
    };
    VehicleComponent = __decorate([
        core_1.Component({
            selector: 'vehicle',
            templateUrl: '../app/vehicle/vehicle-list.html',
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService, router_1.Router])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=vehicle.component.js.map