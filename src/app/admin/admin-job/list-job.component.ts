import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { listJobService } from '../../services/list-job.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { job } from '../../model/job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-je',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  showDirectionLinks = true;
  addForm!: FormGroup;

  btnDisable = false;
  constructor(private listJobService: listJobService,
    private router: Router,
    private route: ActivatedRoute,
    private rest: listJobService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder) {
    // this.paginator =Object.create(null)
  }
  // data:any

  displayedColumns: string[] = [
    'id',
    'jobName',
    'jobPosition',
    'createDate',
    'dueDate',
    'minSalary',
    'maxSalary',
    'view',
    'isDelete',
   
  ];

  public job: Array<any> = [];
  dataSource: job[] = [];
  totalRecord: number = 0;
  currentPage: number = 0;
  pageN: number = 0;
  pageS: number = 0;

  // dataSource = Object.create(null)
  ngOnInit(): void {
    // this.loaddata();
    this.listJobService.getAllJob().subscribe((data) => {
      this.job = data;

      console.log(this.job);
    });
  }
  // deleteJE(id: number) {

  //   this.btnDisable = true;
  //   alert('xoa thanh cong');
  //   this.router.navigate(['./admin/list-je'])
  //   this.rest.deleteJE(id).subscribe(data => {
  //     alert('xoa thanh cong');
  //     this.data.success('Employee is save');
  //     this.btnDisable = false;
      
  //   },

  //   );
  // }

}
