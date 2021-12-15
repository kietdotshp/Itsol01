import { DataService } from './../../services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/all';
  constructor(private rest: RestApiService, private data: DataService) {

  }

  ngOnInit() {
    this.btnDisable =true;
    this.rest
    .get(this.url)
    .then((data) => {
      this.employees = (data as{employees:Employee[]}).employees
      this.btnDisable = false;
    })
    .catch((error) => {
      this.data.error(error['message']);
      this.btnDisable = false;
    });
}
}
