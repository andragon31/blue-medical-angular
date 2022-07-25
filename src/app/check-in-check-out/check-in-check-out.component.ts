import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleParkingService } from '../vehicle-parking.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss']
})
export class CheckInCheckOutComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  option!: string;
  title!: string;
  plate:string = "";

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private services: VehicleParkingService) { }

  ngOnInit(): void {
    this.option = this.activatedRoute.snapshot.params['option'];
    if(this.option == 'checkIn'){
      this.title = "entrada";
    }
    else{
      this.title = "salida";
    }
  }

  checkInOut(){
    this.blockUI.start('Registrando...');
    if(this.option == 'checkIn'){
      this.services.checkIn(this.plate).subscribe((data:any) => {
        this.blockUI.stop();
        alert(data.message);
      });
    }
    else{
      this.services.checkOut(this.plate).subscribe((data:any) => {
        this.blockUI.stop();
        alert(data.message);
      });
    }
    this.cancel();
  }

  cancel(){
    this.router.navigateByUrl('');
  }
}
