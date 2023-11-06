import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  public form!: NgForm;
  private _authService = inject(AuthService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void { 
    
  }

  onSubmit = (form: any) => {
    let token ;
    this.activatedRoute.queryParams.subscribe(parms=> token = parms?.['token']);

    this._authService
      .resetPassword({...form,token})
      .subscribe((data) => {console.log(data)
       this.router.navigate(['/login']);
      });
  };
}
