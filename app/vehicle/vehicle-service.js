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
var vehicle_1 = require('./vehicle');
var core_1 = require('@angular/core');
//let heroesPromise = Promise.resolve(HEROES);
var VehicleService = (function () {
    function VehicleService() {
        this.vehicle = new vehicle_1.Vehicle();
        this.vehicles = [];
    }
    VehicleService.prototype.getNewVehicle = function () {
        this.vehicle.name = 'New Vehicle';
        this.vehicle.regNumber = 1;
        return this.vehicle;
    };
    VehicleService.prototype.getVehicles = function () {
        var v1 = new vehicle_1.Vehicle();
        v1.name = "Vehicle-1";
        v1.regNumber = 101;
        var v2 = new vehicle_1.Vehicle();
        v2.name = "Vehicle-2";
        v2.regNumber = 102;
        //this.vehicles[0] = v1;
        //this.vehicles[1] = v2;
        this.vehicles.push(v1);
        this.vehicles.push(v2);
        return this.vehicles;
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.vehicles.find(function (v) { return v.regNumber == id; });
    };
    VehicleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle-service.js.map