import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { AuthService } from 'src/app/services';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let mockService = jasmine.createSpyObj(['getById','login']);
  let data = {
    firstName: 'Test',
    lastName: 'tester',
    phoneNumber: '12345678',
    city: 'mohali',
    email: 'test@gmail.com',
    gender: 'male',
  };

  let activatedRouteSpy = {
    snapshot: {
      paramMap: convertToParamMap({
        id: '123',
      }),
    },
  };
  let activate:ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComponent],
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        { provide: AuthService, useValue: mockService },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
     activatedRouteSpy = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view data based on param', () => {

    mockService.getById.and.returnValue(of(data));
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('li span + span'));
     expect(element.nativeElement.textContent).toBe(data.firstName)
  });

});
