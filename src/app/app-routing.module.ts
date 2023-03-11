import { sharedRoutes } from './shared/routes/shared-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const routes: Routes = [{path:'',
redirectTo: 'sign-in',pathMatch:"full"},
{path:'',children:sharedRoutes},
{path:'**',component:NotFoundComponent,title:'404'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
