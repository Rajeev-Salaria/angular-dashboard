import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit, OnInit{
constructor(private renderer:Renderer2,private _authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this._authService.getAuthToken();
    if (this._authService.user) {
      this.router.navigate(['/sign-in']);
    }
    }
ngAfterViewInit(): void {
  let root = this.renderer.selectRootElement('#initial-loader');
  this.renderer.setStyle(root, 'display', 'none');
}
}
