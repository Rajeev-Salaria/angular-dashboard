import { ComponentFixture, TestBed, fakeAsync, tick,async } from '@angular/core/testing';
import { AuthService } from 'src/app/services';
import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginForm } from 'src/app/shared/models';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let service:AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      providers:[AuthService], 
      imports:[ReactiveFormsModule,FormsModule, HttpClientTestingModule,RouterTestingModule.withRoutes([])]

      
    })
    .compileComponents();
    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });


  it('should be created service instances', () => {
    expect(service).toBeTruthy();
  });


  it('should call with when submit', fakeAsync(() => {
    const credentials = { email: 'rajeevsalaria@gmail.com', password: 'Rajeev@1234' };
    const expectedResponse = { success: true };
  
    spyOn(service, 'login').and.returnValue(of(credentials));
    spyOn(router, 'navigate');
  
    component.onSubmit();
  
    expect(service.login).toHaveBeenCalledWith(component.form.value);
    tick();
  
    expect(router.navigate).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }));
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("email and password should validate", () => {
   let email = component.form.controls["email"];
   let password = component.form.controls["password"];
     email.setValue('test@example.com');
    password.setValue('12345678');
    expect(email.valid && password.valid).toBeTruthy();
  })

  it("should have  validate", () => {
    let email = component.form.controls["email"];
    let password = component.form.controls["password"];
      email.setValue('test@example.com');
     password.setValue('12345678');
     email.setValidators(Validators.email);
     password.setValidators(Validators.minLength(3))
     expect(email.valid && password.valid).toBeTruthy();
   })

   it('created a form with username and password input and login button', () => {
    const usernameContainer = fixture.debugElement.nativeElement.querySelector('#email');
    const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password');
    const loginBtnContainer = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    expect(usernameContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(loginBtnContainer).toBeDefined();
  });



});
