import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profiles } from 'src/app/model/profiles';
import { InfomationUserService } from 'src/app/services/infomation-user.service';

@Component({
  selector: 'app-infomation-user',
  templateUrl: './infomation-user.component.html',
  styleUrls: ['./infomation-user.component.css']
})
export class InfomationUserComponent implements OnInit {
  profile: any;
  //  route: any;

  constructor(
    private route:ActivatedRoute,
    private infomationUserService: InfomationUserService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }
  getRoute(id:any){
    this.infomationUserService.find(id).subscribe((res:any)=>{

      this.profile = res;
      console.log(this.profile);

    });
  }
}
