import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../services/employee.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from './../../model/employee';
import { searchJe } from './../../model/searchJe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-je',
  templateUrl: './list-je.component.html',
  styleUrls: ['./list-je.component.css']
})
export class ListJeComponent implements OnInit {

  showDirectionLinks = true;
  addForm!: FormGroup;
  searchJe:searchJe[];
  employee: Employee[];
  btnDisable = false;
  constructor(private EmployeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder,
    ) {
    // this.paginator =Object.create(null)
  }
  // data:any
  searchForm: FormGroup = this.Fb.group({
    fullName: new FormControl(""),
    email: new FormControl(""),
    username: new FormControl(""),
    phoneNumber: new FormControl("")

  })
  
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
  totalRecord: number = 1;
  currentPage: number = 1;
  pageN: number = 1;
  pageS: number = 0;
  fullName: "" ;
  email:"";


  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.EmployeeService.getAllJe().subscribe((data) => {
      this.employees = data;

      console.log(this.employees);
    });
    this.onSearchJe();
  }
  onSearchJe() {
    console.log(this.searchForm.value);
    
    this.EmployeeService.searchJe(this.searchForm.value,this.fullName,this.email ).subscribe(data => {
      console.log(data)
      this.searchJe = data;
    })
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
