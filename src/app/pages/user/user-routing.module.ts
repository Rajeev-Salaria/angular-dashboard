import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { UserLayoutComponent } from 'src/app/shared/layout/user-layout/user-layout.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
path:'',component:UserLayoutComponent,
children:[{path:'home',component:DashboardComponent, title:'Home'},
{path:'products',component:ProductComponent,title:'Products'},
{path:'user',component:UserComponent,title:'Users'},
{path:'blog',component:BlogComponent,title:'Blog'},
{path:'login',component:LoginComponent},
{path:'view/:id',component:ViewComponent},
{path:'edit/:id',component:EditComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
