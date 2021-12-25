import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { JobRegister } from '../../../model/job-register';
import { AddJobRegister } from '../../../model/job-register-add';
import { JobRegisterService } from '../../../services/job-register.service';

// import { JobRegisterService } from '../../../services/job-register.service';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
})
export class ProfileDetailComponent implements OnInit {
  formUpdate: FormGroup;
  public dataSource: JobRegister;
  public addJobRegister: AddJobRegister;

  constructor(
    private route: ActivatedRoute,
    private jobRegisterService: JobRegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getJobRegisterById();
  }

  editForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    fullName: new FormControl(''),
    jobPosition: new FormControl(''),
    statusName: new FormControl(''),
    reason: new FormControl('')
  });

  public getJobRegisterById(): void {
    const job_reg_id = this.route.snapshot.params['id'];
    debugger;
    this.jobRegisterService.getJobregisterById(job_reg_id).subscribe((data) => {
      this.dataSource = data;
      this.editForm.patchValue({
        id: job_reg_id,
        fullName: this.dataSource.user.fullName,
        jobPosition: this.dataSource.jobs.jobPosition,
        statusName: this.dataSource.jobStatus.statusName,
        reason: this.dataSource.reason
      });
    });

  }

  onUpdateJobRegister() {
    this.jobRegisterService
      .updateJobRegister(this.editForm.value)
      .subscribe((res) => {
        console.log(this.editForm.value);
        this.router.navigate(['/admin/profile']);
      });
    this.router.navigate(['/admin/profile']);
  }

  onRefuse() {
    this.addJobRegister = this.editForm.value;
    this.addJobRegister.statusName = 'ung vien bi tu choi';
    this.jobRegisterService
      .updateJobRegister(this.addJobRegister)
      .subscribe((res) => {
        console.log(this.addJobRegister);
      });
    this.router.navigate(['/admin/profile']);
    this.closePopup1();
    this.getJobRegisterById();
  }

  onBrowsing() {
    this.addJobRegister = this.editForm.value;
    debugger;
    this.addJobRegister.statusName = 'cho phong van';
    this.jobRegisterService
      .updateJobRegister(this.addJobRegister)
      .subscribe((res) => {
        console.log(this.addJobRegister);
      });
    this.router.navigate(['/admin/profile']);
    this.closePopup1();
    this.getJobRegisterById();
  }
  onRecruit() {
    this.addJobRegister = this.editForm.value;
    this.addJobRegister.statusName = 'dang phong van';
    this.jobRegisterService
      .updateJobRegister(this.addJobRegister)
      .subscribe((res) => {
        console.log(this.addJobRegister);
      });
    this.router.navigate(['/admin/profile']);
    this.closePopup1();
    this.getJobRegisterById();
  }
  onSchedule() {
    this.addJobRegister = this.editForm.value;
    this.addJobRegister.statusName = 'da tuyen';
    this.jobRegisterService
      .updateJobRegister(this.addJobRegister)
      .subscribe((res) => {
        console.log(this.addJobRegister);
      });
    this.router.navigate(['/admin/profile']);
    this.closePopup1();
    this.getJobRegisterById();
  }

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  displayStyle1 = 'none';
  openPopup1() {
    this.displayStyle1 = 'block';
  }
  closePopup1() {
    this.displayStyle1 = 'none';
  }
}
