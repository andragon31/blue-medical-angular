import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleParkingService {

  public options: any;
  public headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(public httpClient: HttpClient, private router: Router) { 
    this.options = {
      headers: this.headers
    };
  }

  checkIn(plate:String){
    return this.httpClient.post(environment.url + 'check_in', {plate}, this.options);
  }

  checkOut(plate:String){
    return this.httpClient.post(environment.url + 'check_out', {plate}, this.options);
  }

  contracts(){
    return this.httpClient.get(environment.url + 'get_contracts', this.options);
  }

  updateContractVehicle(plate:String, id_contract:number){
    return this.httpClient.post(environment.url + 'update_contract_vehicle', {plate, id_contract}, this.options);
  }

  startMonth(){
    return this.httpClient.post(environment.url + 'start_month', this.options);
  }

  generatePDFResident(name:string){
    window.location.href = environment.url_web + 'generate_pdf_resident/' + name;
    //this.router.navigateByUrl(environment.url_web + 'generate_pdf_resident/' + name);
  }
}
