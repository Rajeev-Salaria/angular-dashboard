import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { RegisterForm,LoginForm } from '../_share/models';
import { ErrorService } from './error.service';


type gender = 'male' | 'female';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url = 'http://localhost:3100';
public user = new BehaviorSubject<string|undefined|null>(null);
  constructor(private http: HttpClient,private _errorService: ErrorService) { }
 
  register(user:RegisterForm):Observable<RegisterForm>{
    return this.http.post<RegisterForm>(this.url+'/api/register',user).pipe(catchError(this._errorService.handleError))
  }

  login(login:LoginForm):Observable<LoginForm>{
    return this.http.post<LoginForm>(this.url+'/api/login',login,{withCredentials:true}).pipe(catchError(this._errorService.handleError))
  }

  getAuthToken() {
    let token = document.cookie.match(/jwt/)?.input !== undefined ? document.cookie.match(/jwt/)?.input : null;
    return this.user.next(token)
  }

  get():Observable<RegisterForm>{
    return this.http.get<RegisterForm>(this.url+'/student').pipe(catchError(this._errorService.handleError))
  }
}
