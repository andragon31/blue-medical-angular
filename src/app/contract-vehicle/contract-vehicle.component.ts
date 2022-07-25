import { Component, OnInit } from '@angular/core';
import { VehicleParkingService } from '../vehicle-parking.service';
import { Router } from '@angular/router';
import { Contract } from '../contract';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-contract-vehicle',
  templateUrl: './contract-vehicle.component.html',
  styleUrls: ['./contract-vehicle.component.scss']
})
export class ContractVehicleComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  option!: string;
  title!: string;
  plate:string = "";
  selectedValue:number = 0;
  contracts!: Contract[];

  constructor(private router: Router,private services: VehicleParkingService) { }

  ngOnInit(): void {
    this.getContracts();
  }

  cancel(){
    this.router.navigateByUrl('');
  }

  getContracts(){
    this.blockUI.start('Cargando contratos...');
    this.services.contracts().subscribe((data:any) => {
      this.contracts = data.data;
      this.blockUI.stop();
    });
  }

  updateContract(){
    this.blockUI.start('Actualizando datos del vehiculo...')
    this.services.updateContractVehicle(this.plate, this.selectedValue).subscribe((data:any)=>{
      this.blockUI.stop();
      alert(data.message);
      this.cancel();
    });
  }
}
