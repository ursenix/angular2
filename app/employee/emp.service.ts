import {Employee} from './employee';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService{

    getEmployees():Employee[]{
        let employees = [
            new Employee(1, 'Senthil', 20000),
            new Employee(2, 'Kumaran', 25000),
            new Employee(3, 'Shakti', 10000),
        ];
        return employees;
        
        }

    }

