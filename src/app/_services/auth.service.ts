import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry } from 'rxjs';
import { RegisterForm,LoginForm } from '../_share/models';
import { ErrorService } from './error.service';


type gender = 'male' | 'female';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url = 'http://localhost:5000/api/user';
public user = new BehaviorSubject<string|undefined|null>(null);
  constructor(private http: HttpClient,private _errorService: ErrorService) { }

  
 
  register(user:RegisterForm):Observable<RegisterForm>{
    return this.http.post<RegisterForm>(this.url+'/register',user).pipe(catchError(this._errorService.handleError))
  }

  login(login:LoginForm):Observable<LoginForm>{
    return this.http.post<LoginForm>(this.url+'/login',login,{withCredentials:true}).pipe(retry(3),catchError(this._errorService.handleError))
  }

  getAuthToken() {
    let token = document.cookie.match(/loginToken/)?.input !== undefined ? document.cookie.match(/loginToken/)?.input : null;
    console.log(token)
    return this.user.next(token)
  }

  get():Observable<RegisterForm>{
    return this.http.get<RegisterForm>(this.url+'/student').pipe(catchError(this._errorService.handleError))
  }
}
