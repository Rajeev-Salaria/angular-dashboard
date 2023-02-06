import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [ DashboardComponent,
    ProductComponent,
    UserComponent,
    BlogComponent,],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
