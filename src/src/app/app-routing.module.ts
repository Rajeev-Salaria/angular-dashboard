import { sharedRoutes } from './_share/routes/shared-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
const routes: Routes = [{path:'',
redirectTo: 'sign-in',pathMatch:"full"},
{path:'',children:sharedRoutes},
{path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
