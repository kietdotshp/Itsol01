import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

 
  constructor(private listJobService: listJobService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllData();
    

  }
 
  public getAllData() {
    this.listJobService.getAllJob().subscribe(data => {
      this.jobs = data;
      console.log(this.jobs);
      
    });
    
  }




 
  

}
