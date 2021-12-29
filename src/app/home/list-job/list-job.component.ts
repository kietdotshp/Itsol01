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
    searchName: new FormControl(""),
    positionName: new FormControl(""),
    applicationTimeFrom: new FormControl(""),
    applicationTimeTo: new FormControl(""),
    minSalary: new FormControl(""),
    maxSalary: new FormControl(""),
  })

  // dataSource: Jobs[] = [];
  totalRecord: number = 0;
  pageN: number = 0;
  pageS: number = 5;
  page?: number;
  name: any;
  vacancies: any;
  
  pageChanged(event: PageChangedEvent): void {
    this.pageN = event.page - 1;
    this.listJobService.getAllJobPage(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.jobs = data.data;
    })
  }

  setPage(pageNo: number): void {
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
  // }
    
  onSearchJobRegister() {
    this.listJobService.searchJobs(this.searchForm.value).subscribe(data => {
      console.log(data)
      this.jobs = data;
    })
  }
  // }
}
