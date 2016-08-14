import {Component} from '@angular/core';
//import { ROUTER_DIRECTIVES} from '@angular/router';
import {VehicleService} from './vehicle/vehicle-service';
import {Vehicle} from './vehicle/vehicle';
import {EmployeeService} from './employee/emp.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    //directives: [ROUTER_DIRECTIVES],
    providers: [VehicleService, EmployeeService]

})

export class AppComponent{ }
