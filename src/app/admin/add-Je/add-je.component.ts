import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../services/employee.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-je',
  templateUrl: './add-je.component.html',
  styleUrls: ['./add-je.component.css']
})
export class AddJeComponent implements OnInit {

  employee: Employee;
  addForm!: FormGroup;
  btnDisable = false;
  url = 'http://localhost:8001/api/admin/signupje';
  constructor(
    private rest: EmployeeService,
    private router: Router,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder
  ) {

  }
  ngOnInit() {
    this.initForm();
  }
  public initForm() {
    this.addForm = this.Fb.group({
      fullName: new FormControl(''),
      email: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      homeTown: new FormControl(''),
      gender: new FormControl(''),
      birthDay: new FormControl(''),
    });
  }

  saveJE() {

    this.btnDisable = true;
    console.log(this.addForm.value);
    alert('đăng kí thành công! Vui lòng check mail và xác nhận.');
    this.router.navigate(['./admin/list-je'])
    this.rest.addJE(this.addForm.value).subscribe((data) => {
      this.data.success('Employee is save');
      this.btnDisable = false;
    
    });
  }


  post(link: string, body: any) {

    return this.http.post(link, body).toPromise();
  }

}
