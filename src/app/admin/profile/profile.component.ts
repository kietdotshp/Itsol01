import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { JobRegister } from '../../model/job-register';
import { JobRegisterService } from '../../services/job-register.service';
import { FormBuilder, FormControl, FormGroup, Form } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { saveAs } from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';
import { AddJobRegister } from 'src/app/model/job-register-add';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showDirectionLinks = true;
  private jobjr: JobRegister;
  private jobAdd: AddJobRegister;
  private cvFileName: string;

  constructor(public jobRegisterService: JobRegisterService, public form: FormBuilder, public dialog: MatDialog) {
  }

  editForm: FormGroup = this.form.group({
    id: new FormControl(""),
    dateInterview: new FormControl(""),
    methodInterview: new FormControl(""),
  });

  searchForm: FormGroup = this.form.group({
    applicantName: new FormControl(""),
    positionName: new FormControl(""),
    jobRegisterStatus: new FormControl(""),
    applicationTimeFrom: new FormControl(""),
    applicationTimeTo: new FormControl(""),
  })

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
    this.jobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      console.log(this.dataSource);
    })

  }


  pageChanged1(event: PageChangedEvent): void {
    this.pageN = event.page - 1;
    console.log("pageN " + this.pageN);
    this.jobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      console.log(this.dataSource);
    })

  }

  setPage(pageNo: number): void {
    this.pageN = pageNo;
  }


  ngOnInit(): void {

    this.jobRegisterService.getAllJobregister(this.pageN, this.pageS).subscribe((data) => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
      console.log(this.dataSource);
    })
  }


  onSearchJobRegister() {
    this.jobRegisterService.searchJobRegister(this.searchForm.value, this.pageN, this.pageS).subscribe(data => {
      this.totalRecord = data.totalRecord;
      this.dataSource = data.data;
    })
  }


  getCvFileName(cvFilePath: string) {
    if (!cvFilePath) {
      console.error("File path is null or undefined")
    }
    let cvFilePaths = cvFilePath.split("/");
    return cvFilePaths[cvFilePaths.length - 1];
  }

  onDowload(id: any) {
    this.jobRegisterService.getJobregisterById(id).subscribe(
      data => {
        this.jobjr = data;
        this.cvFileName = this.getCvFileName(this.jobjr.cvFile);
      })
    this.jobRegisterService.dowloadCvFile(id).subscribe(
      blod => saveAs(blod, this.cvFileName)
    );
  }


  onUpdateJobRegister() {
    this.jobRegisterService.updateJobRegister(this.editForm.value).subscribe(
      data => {
        console.log(this.editForm.value);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(this.editForm.value);
      }
    );
  }

  onAccept(id: any) {
    debugger;
    this.jobAdd = this.editForm.value;
    this.jobAdd.id = id;
    this.jobAdd.jobRegisterStatusId = 3;
    this.jobRegisterService.sendMail(this.jobAdd).subscribe(
      res => {
        this.displayStyle1 = "none";
      },
    );
    console.log(this.jobAdd)
    this.displayStyle1 = "none";
  }


  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyle1 = "none";
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }

  licensed = "none";
  openCombobox() {
    this.licensed = "block";
  }
  closeCombobox() {
    this.licensed = "none";
  }

}


