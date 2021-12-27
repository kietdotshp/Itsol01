import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { JobRegister } from '../../../model/job-register';
import { AddJobRegister } from '../../../model/job-register-add';
import { JobRegisterService } from '../../../services/job-register.service';
import { saveAs } from 'file-saver';

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
  private jobRegId: number;
  private apiServerUrl: string;
  private cvFileName: string;

  constructor(
    private route: ActivatedRoute,
    private jobRegisterService: JobRegisterService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.jobRegId = this.route.snapshot.params['id'];
    this.getJobRegisterById();
    this.apiServerUrl = 'http://localhost:8001/api'
  }

  editForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    statusName: new FormControl(''),
    reason: new FormControl('')
  });

  public getJobRegisterById(): void {
    this.jobRegisterService.getJobregisterById(this.jobRegId).subscribe((data) => {
      this.dataSource = data;
      this.cvFileName = this.getCvFileName(data.cvFile);
      this.editForm.patchValue({
        id: this.jobRegId,
        statusName: this.dataSource.jobRegisterStatus.statusName,
        reason: this.dataSource.reason
      });
    });

  }

  getCvFileName(cvFilePath: string) {
    if (!cvFilePath) {
      console.error("File path is null or undefined")
    }
    let cvFilePaths = cvFilePath.split("/");
    return cvFilePaths[cvFilePaths.length - 1];
  }

  onDowload(){
    // this.jobRegisterService.dowloadCvFile(this.jobRegId).subscribe(data =>{
    //   debugger;
    //   const file = new Blob([data], {
    //     type: 'application/pdf',
    //   });
    //   const a = document.createElement('a');
    //   a.href = this.apiServerUrl + `/jobsRegister/cv/download/`+ this.jobRegId + (<any>data)._body;
    //   a.target = '_blank';
    //   document.body.appendChild(a);
    //   a.click();
    //   return data;
    // })




    // this.http.get(this.apiServerUrl + `/jobsRegister/cv/download/` + this.jobRegId).subscribe((res) => {
    //   debugger;
    //   const file = new Blob([res.toString()], {
    //     type: 'application/pdf',
    //   });
    //   const a = document.createElement('a');
    //   a.href = this.apiServerUrl + `/jobsRegister/cv/download/` + this.jobRegId + (<any>res)._body;
    //   a.target = '_blank';
    //   document.body.appendChild(a);
    //   a.click();
    //   return res;
    // });

    this.jobRegisterService.dowloadCvFile(this.jobRegId)
      .subscribe(blob => saveAs(blob, this.cvFileName));

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
    this.addJobRegister.jobRegisterStatusId = 5;
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
    this.addJobRegister.jobRegisterStatusId = 2;
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
    this.addJobRegister.jobRegisterStatusId = 3;
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
    this.addJobRegister.jobRegisterStatusId = 4;
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
