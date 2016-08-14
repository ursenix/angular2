import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {Vehicle} from './vehicle';
import {VehicleService} from './vehicle-service';

//import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'vehicle-detail',
    template: `
    <h2>{{vehicle.name}}</h2>
    <h3>{{vehicle.regNumber}}</h3>
    `
})
export class VehicleDetailComponent implements OnInit, OnDestroy {

    //private sub: Subscription;
    private vehicle: Vehicle;
    
    constructor(private vehicleService:VehicleService, private route: ActivatedRoute){
        console.log("vehicle detail component constructor.");
    }
    
    ngOnInit(){
        // this.sub = this.route.params.subscribe(params => {
        //    let id = +params['id'];
        //    console.log("ID: " + id);
        //    this.vehicle = this.vehicleService.getVehicle(id);//.then(v => this.vehicle = v)
        // });
            console.log("Inside v-detail on-init ");
            console.log(this.route);
            console.log(this.route.snapshot.queryParams['session_id']);
            console.log(this.route.snapshot.params['id']);
           //let id = this.route.params.value.id;
           let id = this.route.snapshot.params['id'];
           console.log("ID: " + id);
           this.vehicle = this.vehicleService.getVehicle(id);//.then(v => this.vehicle = v)
        
    }
    
    ngOnDestroy(){
        //this.sub.unsubscribe();
    }
    
    
}