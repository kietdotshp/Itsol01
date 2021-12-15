import { Employee } from './../model/employee';
import { Forgotpassword } from './../model/forgotPassword';

import { RestApiService } from './rest-api.service';
// import { UserModule } from '../models/user/user.module';
import { Injectable } from '@angular/core';
import { NavigationStart,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  message ='';
  messageType = 'danger';
  Employee!:Employee;
  Forgotpassword!:Forgotpassword;

  constructor(private router:Router,private rest:RestApiService) {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationStart){
        this.message='';

      }
    })
  }
  error(message:string){
    this.messageType = 'danger';
    this.message = message;
  }
  success(message:string){
    this.messageType = 'success';
    this.message = message;
  }
  warning(message:string){
    this.messageType = 'warning';
    this.message = message;
  }

}
