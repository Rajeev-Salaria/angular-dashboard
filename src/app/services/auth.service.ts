import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry, tap } from 'rxjs';
import { RegisterForm, LoginForm, DeleteResponse, SearchModel, User, Users } from '../shared/models';
import { ErrorService } from './error.service';


type gender = 'male' | 'female';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000/api/user';
  public isDeleted = false;
  public user = new BehaviorSubject<string | null>(null);
  public userInfo = new BehaviorSubject<string|null|undefined|object>(null);
  constructor(private http: HttpClient, private _errorService: ErrorService,private _commonService:CommonService) { }


  register(user: RegisterForm): Observable<RegisterForm> {
    return this.http.post<RegisterForm>(this.url + '/register', user)
  }

  login(login: LoginForm): Observable<LoginForm> {
    return this.http.post<LoginForm>(this.url + '/login', login, { withCredentials: true })
  }

  getAuthToken(): string | undefined | null {
    let token = localStorage.getItem('token')
    token !== undefined ? this.user.next(token) : this.user.next(null);
    return token;
  }

  getCurrentUser() {
    return this.http.get(this.url + '/current');
  }

  getUsers(user:SearchModel):Observable<Users>{
   let params = this._commonService.searchParams(user);
    return this.http.get<Users>(this.url+'/all',{params:new HttpParams({fromObject:params})}).pipe(catchError(this._errorService.handleError))
  }

  getById(id:string|null):Observable<RegisterForm>{
    return this.http.get<User>(this.url+'/view/'+id)
  }

  delete(id:string|undefined):Observable<DeleteResponse>{
    return this.http.delete<DeleteResponse>(this.url+'/delete/'+id)
  }

  updateUserInfo(id:string|undefined,form:RegisterForm):Observable<any>{
    return this.http.patch(this.url+'/update/'+id,form);
  }
}
