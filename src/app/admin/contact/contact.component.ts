import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  comapny: Company[] = [];
  avatarUrl: string = '../../../assets/imags/default-avatar.png';
  //  noAvatar: string = require('../../../assets/imags/default-avatar.png');
  constructor(private companyService: CompanyService) {}
  // data:any

  ngOnInit(): void {
    this.companyService.getAll().subscribe((data: Company[]) => {
      this.comapny = data;
    });
  }

  onAvatarChange(event: any): void {
    const files = event.target.files || event.dataTransfer.files;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      let image = new Image();
      image.onload = () => {
        this.avatarUrl = image.src;
      };
      image.src = e.target.result;
    };
  }

  resetValue(event: any): void {
    event.target.value = null
  }
}
