import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { UserLayoutComponent } from 'src/app/shared/layout/user-layout/user-layout.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [{
path:'',component:UserLayoutComponent,
children:[{path:'home',component:DashboardComponent, title:'Home'},
{path:'products', loadChildren:(()=>import('./product/product.module').then(c=>c.ProductModule))},
{path:'user',loadChildren:(()=>import('./user/user.module').then(c=>c.UserModule))},
{path:'blog',component:BlogComponent,title:'Blog'},
{path:'login',component:LoginComponent},
{path:'settings',component:SettingComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
