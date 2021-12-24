import { EmployeeService } from './../../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-je',
  templateUrl: './edit-je.component.html',
  styleUrls: ['./edit-je.component.css']
})
export class EditJeComponent implements OnInit {

  employee: Employee;
  editForm!: FormGroup;

  btnDisable = false;
  url = 'http://localhost:8001/api/admin/getje';
  url1 = 'http://localhost:8001/api/admin/updateJE';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private Fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getEmployee();
  }
  public initForm() {
    this.editForm = this.Fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required, Validators.minLength(8)]),

      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      homeTown: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      birthDay: new FormControl('', [Validators.required]),
    });
  }
  get fullName() { return this.editForm.get('fullName'); }
  get email() { return this.editForm.get('email'); }
  get userName() { return this.editForm.get('userName'); }
  get phoneNumber() { return this.editForm.get('phoneNumber'); }
  get homeTown() { return this.editForm.get('homeTown'); }
  get gender() { return this.editForm.get('gender'); }
  get birthDay() { return this.editForm.get('birthDay'); }

  public getEmployee() {
    this.employeeService
      .getEmployeeById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.editForm.patchValue({
          fullName: data.fullName,
          email: data.email,
          userName: data.userName,
          password: data.password,
          phoneNumber: data.phoneNumber,
          homeTown: data.homeTown,
          gender: data.gender,
          birthDay: data.birthDay,
        });
        console.log(data);
      });
  }

  public updateEmployee() {

    this.employeeService

      .updateJE(this.editForm.value, this.route.snapshot.params['id'])
      .subscribe((data) => {
        console.log('data', data);
        alert("update thanh cong")
        this.router.navigate(['./admin/list-je'])
      });
  }

  get f() {
    return this.editForm.controls;
  }

}
