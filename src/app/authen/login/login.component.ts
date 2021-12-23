import { DataService } from './../../services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Router } from '@angular/router';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8001/login';
  constructor(private rest: RestApiService, private data: DataService,private router:Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void {}
  validate() {
    return true;
  }
  async login() {
    
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then((data) => {
          let value = data as{employeeId:string, token: string};
          localStorage.setItem('token',value.token);
         // await this.data.getProfile();
         alert("login thanh cong")
          this.router.navigate(['./admin'])
        })
        .catch((error) => {
          this.data.error(error['error']);
          this.btnDisable = false;
        });
    }
  }

}
