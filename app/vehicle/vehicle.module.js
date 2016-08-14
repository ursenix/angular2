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
//import { BrowserModule } from '@angular/platform-browser';
var forms_1 = require('@angular/forms');
var vehicle_component_1 = require('./vehicle.component');
var vehicle_service_1 = require('./vehicle-service');
var vehicle_routing_1 = require('./vehicle.routing');
var VehicleModule = (function () {
    function VehicleModule() {
    }
    VehicleModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, vehicle_routing_1.VehicleRouting],
            declarations: [vehicle_component_1.VehicleComponent],
            providers: [vehicle_service_1.VehicleService],
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleModule);
    return VehicleModule;
}());
exports.VehicleModule = VehicleModule;
//# sourceMappingURL=vehicle.module.js.map