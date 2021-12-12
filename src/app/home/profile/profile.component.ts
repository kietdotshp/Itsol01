import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any

  constructor() { }

  ngOnInit(): void {
    this.profile = {
      email: 'b@gmail.com',
      skill: 'Java2',
      gender: 'Nam',
      phone_number: '0123456789',
      number_years_experience: 3,
      desired_working_address: 'Ha Noi',
      desiredworkname: 'parttime',
      full_name: 'Nguyen Van B',
      academic_name: 'Dai hoc1',
      birth_day: '01/06/2000',
      desired_salary: 1500
    }
  }

}
