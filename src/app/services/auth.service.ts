import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry, tap } from 'rxjs';
import {
  RegisterForm,
  LoginForm,
  DeleteResponse,
  SearchModel,
  User,
  Users,
} from '../shared/models';
import { ErrorService } from './error.service';

type gender = 'male' | 'female';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = 'http://localhost:5000/api/user';
  public isDeleted = false;
  public user = new BehaviorSubject<string | null>(null);
  public userInfo = new BehaviorSubject<string | null | undefined | object>(
    null
  );
  public loginUser = new BehaviorSubject<User | null>(null);
  constructor(
    private http: HttpClient,
    private _errorService: ErrorService,
    private _commonService: CommonService
  ) {}

  register(user: RegisterForm): Observable<RegisterForm> {
    return this.http.post<RegisterForm>(this.url + '/register', user);
  }

  login(login: LoginForm): Observable<LoginForm> {
    return this.http.post<LoginForm>(this.url + '/login', login, {
      withCredentials: true,
    }).pipe(catchError(this._errorService.handleError));
  }

  logout() {
    let token =
      localStorage.getItem('token') !== undefined
        ? localStorage.getItem('token')
        : '';
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token ? token : '',
      }),
      withCredentials: true,
    };
    return this.http
      .get(this.url + '/logout', requestOptions)
      .pipe(catchError(this._errorService.handleError));
  }

  getAuthToken(): string | undefined | null {
    let token = localStorage.getItem('token');
    token !== undefined ? this.user.next(token) : this.user.next(null);
    return token;
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.url + '/current');
  }

  getUsers(user: SearchModel): Observable<Users> {
    let params = this._commonService.searchParams(user);
    return this.http
      .get<Users>(this.url + '/all', {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe(catchError(this._errorService.handleError));
  }

  getById(id: string | null): Observable<RegisterForm> {
    return this.http.get<User>(this.url + '/view/' + id);
  }

  delete(id: string | undefined): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(this.url + '/delete/' + id);
  }

  updateUserInfo(id: string | undefined, form: RegisterForm): Observable<any> {
    return this.http.patch(this.url + '/update/' + id, form);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(this.url + '/forgotPassword/', email);
  }

  resetPassword(obj:any): Observable<any>{
    return this.http.patch(this.url + '/resetPassword/', obj);
  }
}
