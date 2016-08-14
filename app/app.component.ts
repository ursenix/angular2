import {Component} from '@angular/core';
import {VehicleService} from './vehicle/vehicle-service';
import {Vehicle} from './vehicle/vehicle';
import {EmployeeService} from './employee/emp.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    //providers: [VehicleService, EmployeeService]

})

export class AppComponent{ }
