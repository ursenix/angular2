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
var router_1 = require('@angular/router');
var vehicle_service_1 = require('./vehicle-service');
//import { Subscription } from 'rxjs/Subscription';
var VehicleDetailComponent = (function () {
    function VehicleDetailComponent(vehicleService, route) {
        this.vehicleService = vehicleService;
        this.route = route;
        console.log("vehicle detail component constructor.");
    }
    VehicleDetailComponent.prototype.ngOnInit = function () {
        // this.sub = this.route.params.subscribe(params => {
        //    let id = +params['id'];
        //    console.log("ID: " + id);
        //    this.vehicle = this.vehicleService.getVehicle(id);//.then(v => this.vehicle = v)
        // });
        console.log("Inside v-detail on-init ");
        console.log(this.route);
        console.log(this.route.snapshot.queryParams['session_id']);
        console.log(this.route.snapshot.params['id']);
        //let id = this.route.params.value.id;
        var id = this.route.snapshot.params['id'];
        console.log("ID: " + id);
        this.vehicle = this.vehicleService.getVehicle(id); //.then(v => this.vehicle = v)
    };
    VehicleDetailComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    VehicleDetailComponent = __decorate([
        core_1.Component({
            selector: 'vehicle-detail',
            template: "\n    <h2>{{vehicle.name}}</h2>\n    <h3>{{vehicle.regNumber}}</h3>\n    "
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService, router_1.ActivatedRoute])
    ], VehicleDetailComponent);
    return VehicleDetailComponent;
}());
exports.VehicleDetailComponent = VehicleDetailComponent;
//# sourceMappingURL=vehicleDetail.component.js.map