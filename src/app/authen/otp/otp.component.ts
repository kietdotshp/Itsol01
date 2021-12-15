import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Otp } from './../../model/otp';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp: Otp;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/users/info/change-password';
  constructor(private rest: RestApiService, private data: DataService,private router:Router) {
    this.otp = new Otp();
  }

  ngOnInit(): void {}
  validate() {
    return true;
  }
  async saveOtp() {
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .put(this.url, this.otp)
        .then((data) => {
          let value = data as{employeeId:string, token: string};
          localStorage.getItem('token');
         // await this.data.getProfile();

          this.router.navigate(['/user/otp'])
        })
        .catch((error) => {
          this.data.error(error['error']);
          this.btnDisable = false;
        });
    }
  }

}
