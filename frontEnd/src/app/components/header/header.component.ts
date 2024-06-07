import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _userDialog:MatDialog){}


  userSignUp(){
 const dialogConfig=new MatDialogConfig()
 dialogConfig.width='70rem',
    dialogConfig.position={
      right:'10px',
      top:'5px'
    }
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    this._userDialog.open(SignUpComponent,dialogConfig)
  }
}
