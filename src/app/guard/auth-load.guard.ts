import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  constructor(private authService: AuthService,private router: Router){

  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   this.authService.getAuthToken();
    return this.authService.user.pipe(map(user =>{
         if(user){
          return true
         }
        
         return false
     }))
  }
}
