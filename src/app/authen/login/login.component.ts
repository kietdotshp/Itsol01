import { DataService } from './../../services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Router } from '@angular/router';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { USER_ROLE_KEY } from 'src/app/config/user-roles-keys';
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
  API_URL='http://localhost:8001/api/user'

  constructor(private rest: RestApiService, private data: DataService,private router:Router, private Fb: FormBuilder) {


    this.employee = new Employee  ();
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
          console.log(data)
          let value = data as{username:string, token: string,roles: string};
          localStorage.setItem('token',value.token);
          localStorage.setItem('username',value.username);
         
         alert("login thanh cong")
         this.rest.get(`${this.API_URL}/getuserinfo`).then((res) => {
          console.log(res)
          let value = res as any[];
          localStorage.setItem('user-role-key', value.toString())
        }
        )
          this.router.navigate(['./home/popup'])

        })

        .catch((error) => {
          this.data.error(error['error']);
          this.btnDisable = false;
          alert("login that bai")
        });
    }
  }

}
