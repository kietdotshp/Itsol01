import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { User } from '../model/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('uploadAvatar')
  loading: boolean = false;
  file: File;
  item: any;
  formUser: FormGroup;
  employee: Employee;
  constructor(private userService: UsersService, private router: Router,
    private route: ActivatedRoute,private fb: FormBuilder,) { }

  ngOnInit(): void {
    // this.getEmployee();
    this.initForm();
    this.getRoute(this.route.snapshot.params['id']);
  }
  onChange(event: any, id: any) {
    this.file = event.target.files[0];

    this.loading = !this.loading;
    console.log(event.target.files[0]);
    this.userService
      .upload(event.target.files[0], id)
      .subscribe((event: any) => {
        if (typeof event === 'object') {
          // Short link via api response
          // this.shortLink = event.link;

          this.loading = false; // Flag variable
        }
      });
  }

  public initForm() {
    this.formUser = this.fb.group({
      id:new FormControl(''),
      fullName: new FormControl(''),
    });
  }
  getRoute(id: number) {

    this.userService.find(id).subscribe((res: any) => {
      this.item = res;
      console.log(this.item);

    });
  }
  // public getEmployee() {
  //   debugger
  //   this.userService
  //     .getUser(this.route.snapshot.params['id'])
  //     .subscribe((data) => {
  //       this.formUser.patchValue({
  //         fullName: data.fullName,
  //       });
  //       console.log(data);
  //     });
  // }

}
