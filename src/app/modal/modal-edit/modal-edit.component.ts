import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
  noAvatar: string = '../../../assets/imags/default-avatar.png';
  constructor(@Inject(MAT_DIALOG_DATA) public contact: any, private dialogRef: MatDialogRef<ModalEditComponent>) { }

  ngOnInit(): void {

  }

  onAvatarChange(event: any): void {
    const files = event.target.files || event.dataTransfer.files;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      let image = new Image();
      image.onload = () => {
        this.contact.avatar = image.src;
      };
      image.src = e.target.result;
    };
  }

  resetValue(event: any): void {
    event.target.value = null
  }

  updateData() {
    this.dialogRef.close({ data: this.contact })
  }

}
