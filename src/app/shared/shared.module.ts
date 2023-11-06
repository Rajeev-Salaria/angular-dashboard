import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { RouterOutlet,RouterModule } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { faSearch ,faUserCircle,faBell,faSignOut,faGear,faIdCard} from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule,NgbDropdownModule,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableDirective } from './directives/sortable.directive';
import { TestDirective } from './directives/test.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
@NgModule({
  declarations: [HeaderComponent,UserSidebarComponent, UserLayoutComponent,TestDirective,SortableDirective, FilterPipe, SearchPipe,PaginationComponent, TruncatePipe],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    RouterOutlet,RouterModule,FontAwesomeModule,NgbCollapseModule,NgbDropdownModule,NgbPaginationModule
  ],
  exports:[TestDirective,SortableDirective,SearchPipe,PaginationComponent,ReactiveFormsModule,FormsModule,TruncatePipe], 
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faBell,faUserCircle,faSearch,faSignOut,faGear,faIdCard);
  }
}
