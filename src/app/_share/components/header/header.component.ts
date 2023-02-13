import { Component, OnInit, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { catchError, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed: boolean = false;
  public user$!:Observable<any>
  constructor(private offcanvasService: NgbOffcanvas, private _authService: AuthService,private router : Router) {}
  ngOnInit(): void {
    this.user$= this._authService.getUser().pipe(tap(el=>this._authService.userInfo.next(el)),catchError(async (error) => {if(error === 'jwt expired') this.router.navigate(['/sign-in'])})) 
  }
  openTop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' });
  }
}
