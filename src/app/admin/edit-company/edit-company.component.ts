import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import { FiletestService } from 'src/app/services/filetest.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
})
export class EditCompanyComponent implements OnInit {
  company: Company[] = [];
  formUpdate: FormGroup;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FiletestService
  ) { }
  ngOnInit(): void {
    this.initForm();
    this.getcompany();
  }

  public initForm() {
    this.formUpdate = this.fb.group({
      avatar: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      hotLine: new FormControl(''),
      dateIncorporation: new FormControl(''),
      taxCode: new FormControl(''),
      taxDate: new FormControl(''),
      taxPlace: new FormControl(''),
      headOffice: new FormControl(''),
      numberStaff: new FormControl(''),
      linkWeb: new FormControl(''),
      description: new FormControl(''),
      backdropImg: new FormControl(''),
    });
  }
  getcompany() {
    this.companyService
      .getCompanyById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.formUpdate.patchValue({
          avatar: data.avatar,
          name: data.name,
          email: data.email,
          hotLine: data.hotLine,
          dateIncorporation: data.dateIncorporation,
          taxCode: data.taxCode,
          taxDate: data.taxDate,
          taxPlace: data.taxPlace,
          headOffice: data.headOffice,
          numberStaff: data.numberStaff,
          linkWeb: data.linkWeb,
          description: data.description,
        });
        console.log(data);
      });
  }
  update() {

    this.companyService
      .updateById(this.formUpdate.value, this.route.snapshot.params['id'])
      .subscribe((data) => {
        console.log('data', data);
        alert('update thanh cong');
        this.router.navigate(['admin/contact'])
      });
  }
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
    switch(httpEvent.type) {
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
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
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
}


