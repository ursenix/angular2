import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle.component';

const vehicleRoutes:Routes = [
 { path: 'vehicles', component: VehicleComponent }   
];

export const VehicleRouting = RouterModule.forChild(vehicleRoutes);