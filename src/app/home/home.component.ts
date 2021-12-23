import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
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
}
