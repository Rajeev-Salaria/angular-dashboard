import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  public form!: NgForm;
  private _authService = inject(AuthService);

  onSubmit = (value: string) => {
    this._authService
      .forgotPassword(value)
      .subscribe((data) => console.log(data));
  };
}
