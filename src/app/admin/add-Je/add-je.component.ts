import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  addForm: FormGroup;
  btnDisable = false;
  url = 'http://localhost:8001/api/admin/signupje';
  constructor(
    private rest: EmployeeService,
    private router: Router,
    private data: DataService,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

 
  ngOnInit(): void {
    this.initForm();
    
  }
  public initForm() {
    this.addForm = this.fb.group({
      fullName: new FormControl('', [Validators.required,Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('',[Validators.required,Validators.minLength(8)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
      homeTown: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      birthDay: new FormControl('',[Validators.required]),
    });
  }
  get fullName() { return this.addForm.get('fullName'); }
  get email() { return this.addForm.get('email'); }
  get userName() { return this.addForm.get('userName'); }
  get password() { return this.addForm.get('password'); }
  get phoneNumber() { return this.addForm.get('phoneNumber'); }
  get homeTown() { return this.addForm.get('homeTown'); }
  get gender() { return this.addForm.get('gender'); }
  get birthDay() { return this.addForm.get('birthDay'); }

  onSubmit() {
    console.log(this.addForm.value)
  }
  get f() {
    return this.addForm.controls
  }

  saveJE() {

    this.btnDisable = true;
    console.log('test', this.addForm.value);
    alert("đăng kí thành công! Vui lòng check mail và xác nhận.");
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
