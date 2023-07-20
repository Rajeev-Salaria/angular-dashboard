import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  upload(data:FormData): Observable<any> {
    return this.http.post(this.url+'/uploadphoto',data);
  }
}
