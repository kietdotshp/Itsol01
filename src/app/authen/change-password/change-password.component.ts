import { tap, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { ChangePassword } from './../../model/changePassword';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  passForm!: FormGroup;
  changePassword: ChangePassword;
  btnDisable = false;
  url = 'http://localhost:8001/api/user/info/change-password';
  urlOtp = 'http://localhost:8001/api/user/users/info/change-password';
  constructor(private rests: RestApiService, private data: DataService,private router:Router,private http:HttpClient,   private Fb: FormBuilder) {
    this.changePassword = new ChangePassword();
  }

  ngOnInit(): void {this.initForm();}
  public initForm() {
    this.passForm = this.Fb.group({
      
      currentPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
      newPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
      verifyNewPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
    
    });
  }
  get currentPassword() { return this.passForm.get('currentPassword'); }
  get newPassword() { return this.passForm.get('newPassword'); }
  get verifyNewPassword() { return this.passForm.get('verifyNewPassword'); }
  validate() {
    return true;
  }
  async changePass() {
    this.btnDisable = true;
      this.post(this.url, this.changePassword)
        .subscribe(
          ()=>{

          }
        
        ,(data) => {
          console.log(data);
          alert(" Vui lòng check mail và xác nhận nhập mã OTP.");
          let otp = prompt("Mã OTP:");
  password:this.changePassword.newPassword
          this.rests.put(this.urlOtp,{
            otpCode:otp,
            password:this.changePassword.newPassword
           }).then((data)=>{
             alert("Doi mat khau thất bại!")
           }).catch((error)=>{
             alert("Doi mat khau thanh cong")
             this.router.navigate(['./home'])
           })

         
        })
      

  }
  post(link: string,body: any){
    let headers = this.rests.getHeaders();
    if(headers instanceof HttpHeaders)
    return this.http.post(link,body,{headers:headers}).pipe(tap());
    return this.http.post(link,body).pipe(tap());
  }

}
