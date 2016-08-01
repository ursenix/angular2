import {Vehicle} from './vehicle';
import {Injectable} from '@angular/core';

@Injectable()
export class VehicleService{

  vehicle: Vehicle;

  constructor(){
    this.vehicle = new Vehicle();
  }

  getNewVehicle(){
    this.vehicle.name = 'New Vehicle';
    this.vehicle.regNumber = 1;
    return this.vehicle;
  }

}
