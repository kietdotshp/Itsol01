import { Component, OnInit } from '@angular/core';
import { Forgotpassword } from './../../model/forgotPassword';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forgotPassword: Forgotpassword;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/fogotpass';

  constructor(private rests: RestApiService, private data: DataService, private router: Router, private http: HttpClient) {
    this.forgotPassword = new Forgotpassword();
  }
  

  ngOnInit(): void {

  }
  validate() {
    return true;
  }

  async emailforgot() {
  //   debugger
  //   this.btnDisable = true;
  //   let email = prompt("email:");
  //   (data:DataService) => {
     

  //     let email = prompt("email:");

  //     this.rests.put(this.url, {

  //       email: this.forgotPassword.email
  //     }).then((data) => {
  //       alert("Doi mat khau thất bại!")
  //     }).catch((error) => {
  //       alert("Doi mat khau thanh cong")
  //     })


  //   }
  this.btnDisable = true;
  if (this.validate()) {
    this.rests
      .put(this.url, this.forgotPassword)
      .then((data) => {
        email:this.forgotPassword.email
        this.data.success('Employee is save');
        this.btnDisable = false;
        alert("đăng kí thành công! Vui lòng check mail và xác nhận.");
        this.router.navigate(['./login'])
      })
      .catch((error) => {
        this.data.error(error['message']);
        this.btnDisable = false;
      });
  }
}
   
}
