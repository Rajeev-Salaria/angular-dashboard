import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router:Router) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (!error.error || !error.error.error) {
      if (error?.error?.message === "jwt expired") {
        localStorage.removeItem('token');
        errorMessage= error.error.message;
        this.router.navigate(['/sign-in'])
      }else{
      errorMessage = 'This is unknown error. Please try again later.';
      }
    } else {
      errorMessage = error.message;
    }
    console.log(error)
    return throwError(errorMessage);
  }
}
