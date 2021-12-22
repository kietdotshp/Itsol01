import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit() {
    this.initEdit();
    this.getdata();
  }
  initEdit() {
    this.profileForm = this.fb.group({
      id: new FormControl(''),
      fullName: new FormControl(''),
      avatar: new FormControl(''),
      birthDay: new FormControl(''),
      homeTown: new FormControl(''),
      gender: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      skill: new FormControl(''),
      numberYearsExperience: new FormControl(''),
      desiredSalary: new FormControl(''),
      desiredWorkingAddress: new FormControl(''),
      academicName: new FormControl(''),
      desiredworkname: new FormControl(''),
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
      // this.router.navigate(['./home/infomation'] );
    })

  }
}
