import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleParkingService } from '../vehicle-parking.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;

  constructor(private router: Router, private services: VehicleParkingService) { }

  ngOnInit(): void {
  }

  checkInOut(option: string) {
    this.router.navigateByUrl('checkin_checkout/' + option);
  }

  redirect(url: string) {
    this.router.navigateByUrl(url);
  }

  startMonth(){
    this.blockUI.start('Comenzando mes...');
    this.services.startMonth().subscribe((data:any) => {
      this.blockUI.stop();
      alert(data.message);
    });
  }
}
