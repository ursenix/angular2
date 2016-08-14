
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from './emp.component';
import { EmployeeService } from './emp.service';

import { empRouting } from './emp.routing';

@NgModule({

    imports: [FormsModule, empRouting],
    
    declarations:[EmployeeComponent],
    
    providers: [EmployeeService],
    
})
export class EmployeeModule{
    
}