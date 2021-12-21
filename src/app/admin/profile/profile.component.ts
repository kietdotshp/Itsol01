import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { JobRegister } from '../../model/job-register';
import { JobRegisterService } from '../../services/job-register.service';
import { User } from '../../model/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showDirectionLinks = true;

  constructor(public JobRegisterService: JobRegisterService) {
    // this.paginator =Object.create(null)
  }
  // data:any

  dataSource: JobRegister[] = [];
  totalRecord: number = 0;
  pageN: number = 0;
  pageS: number = 2;
  page?: number;
  name: any;
  vacancies: any;

  pageChanged(event: PageChangedEvent): void {
    this.pageN = event.page - 1;
    console.log("pageN " + this.pageN);
    this.JobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      console.log(this.dataSource);
    })
  }

  setPage(pageNo: number): void {
    this.pageN = pageNo;
  }


  ngOnInit(): void {
    this.JobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe((data) => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      console.log(this.dataSource);
    })
  }

  SearchName() {
    if (this.name == "") {
      this.JobRegisterService.getAllJobregister(this.pageN - 1, this.pageS).subscribe(data => {
        this.totalRecord = data.totalRecord;
        return this.dataSource = data.data;
      })
    } else {
      this.dataSource = this.dataSource.filter(data => {
        return data.user.fullName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  SearchVacancies() {
    if (this.vacancies == "") {
      this.JobRegisterService.getAllJobregister(this.pageN - 1, this.pageS).subscribe(data => {
        this.totalRecord = data.totalRecord;
        return this.dataSource = data.data;
      })
    } else {
      this.dataSource = this.dataSource.filter(data => {
        return data.jobs.jobPosition.toLocaleLowerCase().match(this.vacancies.toLocaleLowerCase());
      })
    }
  }
}


