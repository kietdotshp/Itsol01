import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/services/file.service';
import { JobRegisterService } from "../../../../services/job-register.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  // public validate!:FormGroup;
  isSubmmited: boolean = false;
  validate: FormGroup;

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  constructor(private fileService: FileService, private formBuider: FormBuilder, private jobRegisterService: JobRegisterService) { }



  get f() {
    return this.validate.controls
  }

  ngOnInit(): void {
    this.validate = this.formBuider.group({
      "jobName": [null, Validators.required],
      "company": [null, Validators.required],
      "Address": [null, Validators.required],
      "Mess": [null, Validators.required],
      "cv": [null, Validators.required]
    })
  }

  // define a function to upload files
  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.fileService.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // define a function to download files
  onDownloadFile(filename: string): void {
    this.fileService.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
            { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8` }));
          // saveAs(new Blob([httpEvent.body!],
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
        break;

    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.validate.get('cv').setValue(file);
    }
  }

  onSubmit() {

    this.isSubmmited = true;
    // this.jobRegisterService.apply(formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    if (this.validate.valid) {
      const formData = new FormData();
      formData.append('userId', "1"); // TODO - lấy user id cho vào đây (để ở dạng string, ví dụ "1")
      formData.append('cvFile', this.validate.get('cv').value);
      formData.append('jobId', "1"); // TODO - lấy jobId cho vào đây (để ở dạng string, ví dụ "1")
      formData.append('shortDescription', this.validate.get("Mess").value);
      this.jobRegisterService.apply(formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }

  }


}
