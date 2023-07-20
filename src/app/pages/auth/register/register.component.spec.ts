import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/services';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [AuthService],
    }).compileComponents();
    router = TestBed.inject(Router);
    service = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form is valid', () => {
    let email = component.form?.controls['email'];
    let password = component.form?.controls['password'];
    let confirmPassword = component.form?.controls['confirmPassword'];
    let firstName = component.form?.controls['firstName'];
    let lastName = component.form?.controls['lastName'];
    let phone = component.form?.controls['phone'];
    let city = component.form?.controls['city'];
    let gender = component.form?.controls['gender'];

    expect(email.invalid).toBeTruthy();
    expect(password.invalid).toBeTruthy();
    expect(confirmPassword.invalid).toBeTruthy();
    expect(phone.invalid).toBeTruthy();
    expect(city.invalid).toBeTruthy();
    expect(firstName.invalid).toBeTruthy();
    expect(lastName.invalid).toBeTruthy();
    expect(gender.valid).toBeTruthy();

    email.setValue('test@example.com');
    password.setValue('123456');
    confirmPassword.setValue('123456');
    phone.setValue('123456789');
    city.setValue('mohali');
    firstName.setValue('test');
    lastName.setValue('tester');

    email.setValidators(Validators.required);
    password.setValidators(Validators.required);
    confirmPassword.setValidators(Validators.required);
    phone.setValidators(Validators.required);
    city.setValidators(Validators.required);
    firstName.setValidators(Validators.required);
    lastName.setValidators(Validators.required);

    expect(!email.invalid).toBeTruthy();
    expect(!password.invalid).toBeTruthy();
    expect(!confirmPassword.invalid).toBeTruthy();
    expect(!phone.invalid).toBeTruthy();
    expect(!city.invalid).toBeTruthy();
    expect(!firstName.invalid).toBeTruthy();
    expect(!lastName.invalid).toBeTruthy();
    expect(gender.value).toEqual('male');
    expect(component.form.valid).toBeTruthy();
  });

  it('should submit form when click on the button', () => {
    let registerForm = {
      firstName: 'Test',
      lastName: 'tester',
      phoneNumber: '12345678',
      city: 'mohali',
      email: 'test@gmail.com',
      gender: 'male',
      password: '12345',
      confirmPassword: '12345',
    };
    spyOn(service, 'register').and.returnValue(of(registerForm));
    spyOn(router, 'navigate');
    component.onSubmit();
    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click');
    expect(service.register).toHaveBeenCalledWith(component.form.value);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
