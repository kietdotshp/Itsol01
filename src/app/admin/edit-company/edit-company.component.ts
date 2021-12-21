import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
})
export class EditCompanyComponent implements OnInit {
  company: Company[] = [];
  formUpdate: FormGroup;
  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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

}
