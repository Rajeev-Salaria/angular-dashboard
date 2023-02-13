import { Component, Input, OnInit, } from '@angular/core';
import { AuthService, NavService } from 'src/app/_services';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit{
 protected user!:any;
constructor(public navService: NavService,private _authService:AuthService){
  this._authService.userInfo.subscribe(data => this.user = data)
}


ngOnInit(): void {
}


}
