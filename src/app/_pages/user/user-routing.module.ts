import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { UserLayoutComponent } from 'src/app/_share/layout/user-layout/user-layout.component';

const routes: Routes = [{
path:'',component:UserLayoutComponent,
children:[{path:'home',component:DashboardComponent, title:'Home'},
{path:'products',component:ProductComponent,title:'Products'},
{path:'user',component:UserComponent,title:'Users'},
{path:'blog',component:BlogComponent,title:'Blog'},
{path:'login',component:LoginComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
