import {Vehicle} from './vehicle';
import {Injectable} from '@angular/core';

//let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class VehicleService{

  vehicle: Vehicle;
  vehicles: Vehicle[];

  constructor(){
    this.vehicle = new Vehicle();
    this.vehicles = [];
  }

  getNewVehicle(){
    this.vehicle.name = 'New Vehicle';
    this.vehicle.regNumber = 1;
    return this.vehicle;
  }
  
  getVehicles():Vehicle[]{
      
        let v1 = new Vehicle();
        v1.name = "Vehicle-1";
        v1.regNumber = 101;
        
        let v2 = new Vehicle();
        v2.name = "Vehicle-2";
        v2.regNumber = 102;
      
        //this.vehicles[0] = v1;
        //this.vehicles[1] = v2;
        
        this.vehicles.push(v1);
        this.vehicles.push(v2);
        
        return this.vehicles;
        
        }

getVehicle(id) {
    return this.vehicles.find(v => v.regNumber == id);
  }

}

