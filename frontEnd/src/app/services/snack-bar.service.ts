import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { right } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor( private _snackBar:MatSnackBar) { }

  openSnackBar(msg:string,action:string){
    if(action==='error'){
      this._snackBar.open(msg,"",{
        horizontalPosition:'end',
        verticalPosition:'top',
        duration: 2000,
        panelClass:['error-snackbar']
      })
    }
    else{
      this._snackBar.open(msg,"",{
        horizontalPosition:'end',
        verticalPosition:'top',
        duration: 2000,
        panelClass:['succes-snackbar']
      })

    }
  }


}
