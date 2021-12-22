import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-je',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  showDirectionLinks = true;
  addForm!: FormGroup;

  btnDisable = false;
  constructor(private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder) {
    // this.paginator =Object.create(null)
  }
  // data:any

  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'userName',
    'password',
    'phoneNumber',
    'homeTown',
    'gender',
    'birthDay',
    'is_active',
  ];

  public employees: Array<any> = [];
  dataSource: Employee[] = [];
  totalRecord: number = 0;
  currentPage: number = 0;
  pageN: number = 0;
  pageS: number = 0;

  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.EmployeeService.getAllUSER().subscribe((data) => {
      this.employees = data;

      console.log(this.employees);
    });
  }
  deleteUSER(id: number) {
    debugger
    this.router.navigate(['/admin/employee-list'])
    alert('xoa thanh cong');
   
    this.btnDisable = true;
   

    this.rest.deleteUSER(id).subscribe(data => {
     
      this.data.success('Employee is save');
      this.btnDisable = false;
      alert('xoa thanh cong');
    },

    );
  }

}
