
import {Component, OnInit} from '@angular/core';
//import { ROUTER_DIRECTIVES, RouterLink } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import {Vehicle} from './vehicle';
import {VehicleService} from './vehicle-service';

@Component({
    selector: 'vehicle',
    templateUrl: '../app/vehicle/vehicle-list.html',
    //directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class VehicleComponent implements OnInit {

    public vehicles: Vehicle[];

    constructor(private vehicleService:VehicleService, private router: Router){
        console.log("Vehicle Service constructor..");
        
    }

    ngOnInit(){
        this.loadVehicles();
        console.log(this.vehicles);
        
    }

    loadVehicles(){
        this.vehicles = this.vehicleService.getVehicles();
    }
    
    
    
    gotoVehicle(vehicle: Vehicle){
        let navigationExtras: NavigationExtras = { 
            queryParams: { 'session_id': 123456 },
            fragment: 'anchor'
        };
        console.log("Navigation Extras Object: ");
        console.log(navigationExtras);
        this.router.navigate(['/vehicle', vehicle.regNumber], navigationExtras);
    }

}