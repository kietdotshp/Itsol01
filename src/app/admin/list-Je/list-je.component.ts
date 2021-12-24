import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-je',
  templateUrl: './list-je.component.html',
  styleUrls: ['./list-je.component.css']
})
export class ListJeComponent implements OnInit {

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
    this.EmployeeService.getAllJe().subscribe((data) => {
      this.employees = data;

      console.log(this.employees);
    });
  }
  deleteJE(id: number) {

    this.btnDisable = true;
    alert('xoa thanh cong');
    this.router.navigate(['./admin/list-je'])
    this.rest.deleteJE(id).subscribe(data => {
      alert('xoa thanh cong');
      this.data.success('Employee is save');
      this.btnDisable = false;
      
    },

    );
  }

}
