import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleParkingService } from '../vehicle-parking.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-generatepdf',
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.scss']
})
export class GeneratepdfComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  name!:string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private services: VehicleParkingService) { }

  ngOnInit(): void {
  }

  generatePDFResident(){
    if(this.name){
      this.blockUI.start('Generando reporte...');
      this.services.generatePDFResident(this.name);
      this.blockUI.stop();
      this.cancel();
    }
    else{
      alert("Debe seleccionar un nombre para el archivo");
    }
  }

  cancel(){
    this.router.navigateByUrl('');
  }
}
