import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RegisterForm } from 'src/app/_share/models';
import { AuthService } from 'src/app/_services';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit,AfterViewInit{
  public form!: FormGroup;
  public isSubmit: boolean = false;
  constructor(public fb: FormBuilder, private _authService: AuthService,private router: Router,private renderer:Renderer2) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['male'],
    });

    this._authService.getAuthToken();
   this._authService.user.pipe(map(el=>{
    if(el === null){
      return
    }
    this.router.navigate(['/home']);
   }))
  }

  ngAfterViewInit(): void {
    let root = this.renderer.selectRootElement('#initial-loader');
    this.renderer.setStyle(root, 'display', 'none');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get phone() {
    return this.form.get('phone');
  }

  get city() {
    return this.form.get('city');
  }

  get email() {
    return this.form.get('email');
  }

  get gender() {
    return this.form.get('gender');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

 onSubmit() {
    this.isSubmit = true;
    this._authService.register(this.form.value).subscribe(data=>console.log(data),(error)=>this.isSubmit=false,()=>this.isSubmit=false);
  }
}
