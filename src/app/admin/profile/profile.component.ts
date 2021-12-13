import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { JobRegister } from '../../model/job-register';
import { JobRegisterService } from '../../services/job-register.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterViewInit  {

  constructor(private JobRegisterService:JobRegisterService) {
    this.paginator =Object.create(null)
  }
  // data:any

  displayedColumns: string[] = [
    'user',
    'vacancies',
    'applicationTime',
    'status',
    'cvFile'
  ];


  // dataSource: JobRegister[] = [];
  dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.JobRegisterService.getAllJobregister().subscribe(data => {
      debugger;
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource<JobRegister>(data);
      console.log(this.dataSource);

    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
