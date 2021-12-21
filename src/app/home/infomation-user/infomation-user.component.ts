import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { InfomationUserService } from 'src/app/services/infomation-user.service';

@Component({
  selector: 'app-infomation-user',
  templateUrl: './infomation-user.component.html',
  styleUrls: ['./infomation-user.component.css']
})
export class InfomationUserComponent implements OnInit {
  item: any;
  data: any
  //  route: any;
  profileForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private infomationUserService: InfomationUserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
    this.profileForm = this.fb.group({
      id: new FormControl(''),
      fullName: new FormControl(''),
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
  getRoute(id: any) {
    this.infomationUserService.find(id).subscribe((res: any) => {
      this.item = res;
      console.log(this.item);

    });
  }
  update() {
    this.router.navigate(['./home/editinfomation'])
  }


}
