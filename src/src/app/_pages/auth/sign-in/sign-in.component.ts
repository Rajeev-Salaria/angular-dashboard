import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControlName,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  protected isRegister: boolean = true;
  public form!: FormGroup;
  public isSubmit: boolean = false;
  constructor(private fb: FormBuilder, private _authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });

  this._authService.getAuthToken();
   if(this._authService.user){
    this.router.navigate(['/home']);
   }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(): void {
    this.isSubmit = true;
    this._authService.login(this.form.value).subscribe(
      (data) =>{console.log(data); this.router.navigate(['/home'])},
      (error) => this.isSubmit = false,
      () => (this.isSubmit = false)
    );
  }

  toggleForm(): void {
    this.isRegister = !this.isRegister;
  }
}
