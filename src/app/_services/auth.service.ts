import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, retry, tap } from 'rxjs';
import { RegisterForm, LoginForm } from '../_share/models';
import { ErrorService } from './error.service';


type gender = 'male' | 'female';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000/api/user';
  public user = new BehaviorSubject<string | null>(null);
  public userInfo = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private _errorService: ErrorService) { }



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

  getUser() {
    return this.http.get(this.url + '/current');
  }

  get(): Observable<RegisterForm> {
    return this.http.get<RegisterForm>(this.url + '/get').pipe(catchError(this._errorService.handleError))
  }
}
