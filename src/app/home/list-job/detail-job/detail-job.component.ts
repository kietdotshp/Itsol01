import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/job.model';
import { listJobService } from 'src/app/services/list-job.service';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {
  public dataSource: Jobs;
  constructor(private listJobService: listJobService, private route: ActivatedRoute, private routeDi: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.listJobService.getJobById(id).subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);

    })
  }

  public apply() {
    const token = localStorage.getItem("token");
    //  const userName=localStorage.getItem("userName");
    if (token) {
      return true;
    } else {
      return this.routeDi.navigate(['/login'])
    }


  }

}
