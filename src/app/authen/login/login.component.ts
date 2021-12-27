import { DataService } from './../../services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Router } from '@angular/router';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8001/login';

  constructor(private rest: RestApiService, private data: DataService,private router:Router, private Fb: FormBuilder) {


    this.employee = new Employee();
  }

  ngOnInit(): void {this.initForm();}
  public initForm() {
    this.loginForm = this.Fb.group({


      password: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),

    });
  }

  get password() { return this.loginForm.get('password'); }
  get username() { return this.loginForm.get('username'); }
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
          this.router.navigate(['./home'])
        })

        .catch((error) => {
          this.data.error(error['error']);
          this.btnDisable = false;
        });
    }
  }

}
