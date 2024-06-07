import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { globalProperties } from 'src/app/shared/globalProperties';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

registrationForm:any=FormGroup

constructor(private _formBuilder:FormBuilder,
  private _ngxuiloader:NgxUiLoaderService,
  private _userService:UserService,
  private _dialogRef:MatDialogRef<SignUpComponent>
){}

ngOnInit(): void {
  this.registrationForm=this._formBuilder.group({
    username:[null,[Validators.required,Validators.pattern(globalProperties.nameRegx)]],
    password:[null,[Validators.required]],
    email:[null,[Validators.required,Validators.pattern(globalProperties.emailRegx)]],
    cnumber:[null,[Validators.required,Validators.pattern(globalProperties.contactNumberRegex)]]
  })
    
}

onRegister(){
  this._ngxuiloader.start()
  let formData=this.registrationForm.value
  let data={
    username:formData.username,
    password:formData.password,
    email:formData.email,
    cnumber:formData.cnumber
  }
  this._userService.signup(data).subscribe((res)=>{
    this._ngxuiloader.stop()
    this._dialogRef.close()
    console.log("res message",res.message)

  })

}

}
