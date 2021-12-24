import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import { MatDialog } from '@angular/material/dialog'
import { ModalEditComponent } from 'src/app/modal/modal-edit/modal-edit.component';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  editForm: FormGroup;
  company: Company[] = [
  //  {
  //     name: 'Cong ty X',
  //     email: 'xxxxx@gmail.com',
  //     hotLine: '0123456789',
  //     dateIncorporation: '20/11/2010',
  //     taxCode: '000000',
  //     taxDate: '20/11/2010',
  //     taxPlace: 'Ha Noi',
  //     headOffice: 'Duy Tan',
  //     numberStaff: 50,
  //     linkWeb: 'https://itsol.vn/',
  //     description: 'Rat vui duoc lam viec cung ban',
  //     backdropImg: 'xxxxxx12345'
  //   }
];
   avatar:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQKxnlgxsOyKQ-bimseQCyJ5w_2TxbRwG1Q&usqp=CAU';

  noAvatar: string = '../../../assets/imags/default-avatar.png';
  constructor(private companyService: CompanyService, public matDialog: MatDialog) { }
  // data:any

  ngOnInit(): void {
    this.companyService.getAll().subscribe((data: Company[]) => {
      console.log(data);
      this.company = data;
    });
  }

  openModalEdit() {
    let dialogRef = this.matDialog.open(ModalEditComponent, {
      data: this.company[0],
    })

    dialogRef.afterClosed().subscribe(response => {
      console.log(response.data)
    })
  }
  updateCompany(){

  }
}
