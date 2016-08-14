import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './emp.component';

const empRoutes:Routes = [
 { path: 'employees', component: EmployeeComponent }   
];

export const empRouting = RouterModule.forChild(empRoutes);