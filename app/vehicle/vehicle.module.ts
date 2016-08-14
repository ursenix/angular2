
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { VehicleComponent } from './vehicle.component';
import { VehicleService } from './vehicle-service';

import { VehicleRouting } from './vehicle.routing';

@NgModule({

    imports: [FormsModule, VehicleRouting],
    
    declarations:[VehicleComponent],
    
    providers: [VehicleService],
})
export class VehicleModule{
    
}