import {Component, OnInit} from '@angular/core';
import {VehicleService} from './vehicle/vehicle-service';
import {Vehicle} from './vehicle/vehicle';
import {EmployeeService} from './employee/emp.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/vehicle/vehicle-list.html',
    providers: [VehicleService, EmployeeService]

})

export class AppComponent implements OnInit{
    title = 'Sample App';
    hero  = 'Senthil';
    vehicle: Vehicle;
    

    constructor(private vehicleService:VehicleService){
      this.vehicleService = vehicleService;
      //this.getVehicle();
    }

    ngOnInit(){
        this.getVehicle();
    }

    getVehicle(){

        this.vehicle = this.vehicleService.getNewVehicle();
        
    }

    

}
