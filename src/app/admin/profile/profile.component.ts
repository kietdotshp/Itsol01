import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
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
    'cvFile'
  ];


  dataSource: JobRegister[] = [];
  totalRecord: number = 0;
  currentPage: number = 0;
  // dataSource = Object.create(null)
  ngOnInit(): void {

    // this.loaddata();
    this.JobRegisterService.getAllJobregister().subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      // this.dataSource = new MatTableDataSource<JobRegister>(data);
      console.log(this.dataSource);

    })

  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}
