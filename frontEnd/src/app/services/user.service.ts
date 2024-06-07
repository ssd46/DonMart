import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   url=environment.apiUrl
  constructor(private _http: HttpClient) { }


  signup(data):Observable<any>{
   return this._http.post(this.url+'user/signup',data,{
    headers:new HttpHeaders().set('Content-type','application/json')
   })
  }
}
