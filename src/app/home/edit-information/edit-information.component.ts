import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Profiles } from 'src/app/model/profiles';
import { InfomationUserService } from 'src/app/services/infomation-user.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent implements OnInit {
  data: Profiles[] = [];
  profileForm: FormGroup;

  constructor(private router: Router,
    private updateservice: InfomationUserService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.initEdit();
    this.getdata();
  //   this.profileForm = this.fb.group({
  //     phoneNumber: ['', [ Validators.required,
  //      Validators.pattern("09"),
  //      Validators.minLength(10), Validators.maxLength(10)]]
  //  });
  }
  initEdit() {
    this.profileForm = this.fb.group({
      id: new FormControl(''),
      fullName: new FormControl('',[Validators.required,Validators.minLength(6)]),
      avatar: new FormControl(''),
      birthDay: new FormControl('',[Validators.required]),
      homeTown: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      skill: new FormControl('',[Validators.required]),
      numberYearsExperience: new FormControl('',[Validators.required]),
      desiredSalary: new FormControl('',[Validators.required]),
      desiredWorkingAddress: new FormControl('',[Validators.required]),
      academicName: new FormControl('',[Validators.required]),
      desiredworkname: new FormControl('',[Validators.required]),
    })
  }

  getdata() {
    this.updateservice.find(this.route.snapshot.params['id']).subscribe((data) => {
      const profile = data.data
      this.profileForm.patchValue({
        fullName: profile.users.fullName,
        birthday: profile.users.birthDay,
        avatar: profile.users.avatar,
        homeTown: profile.users.homeTown,
        gender: profile.users.gender,
        phoneNumber: profile.users.phoneNumber,
        email: profile.users.email,
        skill: profile.skill,
        numberYearsExperience: profile.numberYearsExperience,
        desiredWorkingAddress: profile.desiredWorkingAddress,
        desiredSalary: profile.desiredSalary,
        academicName: profile.academicLevel.academicName,
        desiredworkname: profile.desiredwork.desiredworkname
      });
    });
  }
  public updateProfile() {
    debugger;
    const data =
    {
      data:{
        academicLevel:{
          academicName: this.profileForm.value.academicName
        },
        users: {

        }
      }
    };
    this.updateservice.update(this.route.snapshot.params['id'], this.profileForm.value).subscribe((data) => {


      console.log( data);
      alert('Chỉnh sửa thành công')
      this.router.navigate(['./home'] );
    })

  }
  get fullName() { return this.profileForm.get('fullName'); }
  get birthDay() { return this.profileForm.get('birthDay'); }
  get email() { return this.profileForm.get('email'); }
  get homeTown() { return this.profileForm.get('homeTown'); }
  get phoneNumber() { return this.profileForm.get('phoneNumber'); }
  get gender() { return this.profileForm.get('gender'); }
  get skill() { return this.profileForm.get('skill'); }
  get numberYearsExperience() { return this.profileForm.get('numberYearsExperience'); }
  get desiredSalary() { return this.profileForm.get('desiredSalary'); }
  get desiredWorkingAddress() { return this.profileForm.get('desiredWorkingAddress'); }
  get academicName() { return this.profileForm.get('academicName'); }
  get desiredworkname() { return this.profileForm.get('desiredworkname'); }
}



