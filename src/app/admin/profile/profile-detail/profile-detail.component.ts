import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobRegisterService } from '../../../services/job-register.service';
import { JobRegister } from '../../../model/job-register';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {


  public dataSource: JobRegister;

  constructor(private route: ActivatedRoute, private JobRegisterService: JobRegisterService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.JobRegisterService.getJobregisterById(id).subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);

    })
  }

}
