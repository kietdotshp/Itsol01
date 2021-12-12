import { Component, OnInit } from '@angular/core';
import { TestapiService } from 'src/app/services/testapi.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private service:TestapiService) { }
  data:any
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.service.getAll().subscribe(res => {
      this.data = res;
    })

  }
}
