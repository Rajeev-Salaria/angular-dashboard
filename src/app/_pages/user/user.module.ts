import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { faCircle,faEllipsisV,faPencil,faTrash,faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/_share/shared.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ DashboardComponent,
    ProductComponent,
    UserComponent,
    BlogComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgChartsModule ,FontAwesomeModule,NgbDropdownModule,NgbPaginationModule,SharedModule,ReactiveFormsModule,FormsModule 
  ]
})
export class UserModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faCircle,faEllipsisV,faPencil,faTrash,faCheckCircle);
  }
}
