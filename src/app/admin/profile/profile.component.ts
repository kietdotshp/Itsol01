import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { JobRegister } from '../../model/job-register';
import { JobRegisterService } from '../../services/job-register.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  showDirectionLinks = true;

  constructor(private JobRegisterService:JobRegisterService) {
    // this.paginator =Object.create(null)
  }
  // data:any

  displayedColumns: string[] = [
    'user',
    'vacancies',
    'applicationTime',
    'status',
    'cvFile',
    'dowload',
    'reason',
    'book',
    'detail'
  ];


  dataSource: JobRegister[] = [];
  totalRecord: number = 0;
  pageN: number = 0;
  pageS: number = 6;
  page?: number;
  searchText: any;
  idN: number= 0;

  pageChanged(event: PageChangedEvent): void {
    this.pageN = event.page -1;
    console.log("pageN "+this.pageN);
    this.JobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe(data => {
      this.dataSource = data.data;
      console.log(this.dataSource);

    })
  }

  setPage(pageNo: number): void {
    this.pageN = pageNo;
  }


  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.JobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      // this.dataSource = new MatTableDataSource<JobRegister>(data);
      console.log(this.dataSource);
    })

    this.JobRegisterService.getJobregisterById(this.idN).subscribe(data => {
      this.dataSource = data.data;
      console.log(this.dataSource);
    })

  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}


