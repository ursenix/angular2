"use strict";
var vehicle_1 = require('./vehicle');
var VehicleService = (function () {
    function VehicleService() {
        this.vehicle = new vehicle_1.Vehicle();
    }
    VehicleService.prototype.getNewVehicle = function () {
        this.vehicle.name = 'New Vehicle';
        this.vehicle.regNumber = 1;
        return this.vehicle;
    };
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle-service.js.map