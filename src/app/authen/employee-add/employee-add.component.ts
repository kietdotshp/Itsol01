import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../model/employee';
// import { EmployeeComponent } from './../employee/employee.component';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from '../../services/rest-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  exform: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8001/signup';
  constructor(private rest: RestApiService, private data: DataService,private router:Router) {
    this.employee = new Employee();
  }

  ngOnInit() {
    this.exform = new FormGroup({
      fullName: new FormControl('', [Validators.required,Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('',[Validators.required,Validators.minLength(8)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
      homeTown: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      birthDay: new FormControl('',[Validators.required]),
    })

  }

  get fullName() { return this.exform.get('fullName'); }
  get email() { return this.exform.get('email'); }
  get userName() { return this.exform.get('userName'); }
  get password() { return this.exform.get('password'); }
  get phoneNumber() { return this.exform.get('phoneNumber'); }
  get homeTown() { return this.exform.get('homeTown'); }
  get gender() { return this.exform.get('gender'); }
  get birthDay() { return this.exform.get('birthDay'); }
  validate() {
    return true;
  }
  save() {
    debugger
    this.btnDisable = true;
  
    if (this.validate()) {
      alert("đăng kí thành công! Vui lòng check mail và xác nhận.");
      this.router.navigate(['./login'])
      this.rest
        .post(this.url, this.employee)
        
        .then((data) => {
          this.data.success('Employee is save');
          this.btnDisable = false;
          
        })
        .catch((error) => {
          this.data.error(error['message']);
          this.btnDisable = false;
        });
    }
  }


}
