import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (!error.error || !error.error.error) {
      errorMessage = 'This is unknown error. Please try again later.';
    }else{
      errorMessage = error.message;
    }
    console.log(error)
   return throwError(errorMessage);
  }
}
