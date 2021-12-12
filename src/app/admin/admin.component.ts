import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
menus = [
  {
    id: 1,
    name: 'Trang chủ',
    path: '/admin/home',
    icon: 'nc-icon nc-chart-pie-35'
  },
  {
    id: 2,
    name: 'Tin tuyển dụng',
    path: '/admin/recruitment',
    icon: 'nc-icon nc-paper-2'
  },
  {
    id: 3,
    name: 'Hồ sơ ứng tuyển',
    path: '/admin/profile',
    icon: 'nc-icon nc-notes'
  },
  {
    id: 4,
    name: 'Danh sách QTV',
    path: '/admin/admin-list',
    icon: 'nc-icon nc-notes'
  },
  {
    id: 5,
    name: 'Thông tin và liên hệ',
    path: '/admin/contact',
    icon: 'nc-icon nc-circle-09'
  },
]
curentRoute: string = ''
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  gotoPage(menu: any): void {
    this.router.navigateByUrl(menu.path)
  }

}
