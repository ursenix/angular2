import {Component} from '@angular/core';
import {VehicleService} from './vehicle/vehicle-service';
import {Vehicle} from './vehicle/vehicle';

@Component({
    selector: 'my-app',
    templateUrl: './app/vehicle/vehicle-list.html',
    providers: [VehicleService]

})

export class AppComponent{
    title = 'Sample App';
    hero  = 'Senthil';
    vehicle: Vehicle;
    vehicleService:VehicleService;

    constructor(vehicleService:VehicleService){
      this.vehicleService = vehicleService;
      this.getVehicle();
    }

    getVehicle(){

        this.vehicle = this.vehicleService.getNewVehicle();
        
    }

    

}
