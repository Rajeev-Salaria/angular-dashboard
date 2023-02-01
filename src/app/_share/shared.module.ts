import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { RouterOutlet,RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { faSearch ,faUserCircle,faBell} from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [HeaderComponent,UserSidebarComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    RouterOutlet,RouterModule,FontAwesomeModule,NgbCollapseModule,NgbDropdownModule
  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faBell,faUserCircle,faSearch);
  }
}
