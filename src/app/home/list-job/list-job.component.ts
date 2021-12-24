import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Jobs } from 'src/app/model/job.model';
import { listJobService } from 'src/app/services/list-job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']

 
})

export class ListJobComponent implements OnInit {

  jobs: Jobs[];
  displayedColumns: string[] = [ 'name', 'addressWork'];



  

 
  constructor(private listJobService: listJobService,private route:ActivatedRoute,public form: FormBuilder) { }

  searchForm: FormGroup = this.form.group({
    JobsName: new FormControl(""),
    Jobsposition: new FormControl(""),
    minSalary: new FormControl(""),
    maxSalary: new FormControl(""),
    applicationTimeFrom: new FormControl(""),
    applicationTimeTo: new FormControl("")
  })

  // dataSource: Jobs[] = [];
  totalRecord: number = 0;
  pageN: number = 0;
  pageS: number = 5;
  page?: number;
  name: any;
  vacancies: any;
  
  pageChanged(event: PageChangedEvent): void {
    // debugger;
    this.pageN = event.page - 1;
    this.listJobService.getAllJobPage(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.jobs = data.data;
    })
  }

  setPage(pageNo: number): void {
    // debugger;
    this.pageN = pageNo;
  }

  ngOnInit(): void {
    // this.getAllData();
    this.listJobService.getAllJobPage(this.pageN, this.pageS).subscribe((data) => {
      this.totalRecord = data.totalRecord;
      this.jobs = data.data;
    })

  }
 
  // public getAllData() {
  //   this.listJobService.getAllJob().subscribe(data => {
  //     this.jobs = data;
  //     console.log(this.jobs);
      
  //   });
    
  

  onSearchJobRegister() {
    this.listJobService.searchJobRegister(this.searchForm.value).subscribe(data => {
      this.jobs = data;
    })
  }


 
  // }

}
