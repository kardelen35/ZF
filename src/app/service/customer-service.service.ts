import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { launchDimensions, launchMaturity } from '../Model/customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  
}
