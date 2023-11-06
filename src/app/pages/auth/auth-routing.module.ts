import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-in', component: SignInComponent, title: 'Sign In' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot Password' },
          { path: 'reset-password', component: ResetPasswordComponent, title: 'Reset Password' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
