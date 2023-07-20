import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;
  let data = {
    data: [
      {
        firstName: 'test',
        lastName: 'test',
        phoneNumber: 'test',
        city: 'mohali',
        email: 'test@example.com',
        gender: 'm',
        phone: '123',
        _id: '1',
      },
      {
        firstName: 'tester',
        lastName: 'tester',
        phoneNumber: 'tester',
        city: 'mohali',
        email: 'test1@example.com',
        gender: 'f',
        phone: '123',
        _id: '2',
      },
    ],
    count: 2,
  };

  let registerForm= {
    firstName: 'Test',
    lastName: 'tester',
    phoneNumber: '12345678',
    city: 'mohali',
    email: 'test@gmail.com',
    gender: 'male',
    password:'12345',
    confirmPassword:'12345'
  };

  let loginForm= {
    email: 'test@gmail.com',
    password:'12345',
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);
  });

  // check only request made
  afterEach(() => controller.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get users method', (done: DoneFn) => {
    let search = {
      keyword: '',
      max: 10,
      offset: 0,
      filterBy: '',
    };

    service.getUsers(search).subscribe((res) => {
      expect(res.count).toEqual(data.count);
      done();
    });

    let request = controller.expectOne(
      'http://localhost:5000/api/user/all?max=10&offset=0'
    );

    request.flush(data);

    expect(request.request.method).toBe('GET');
  });

  it('should call getBy id', () => {
    service.getById('1').subscribe((data) => {
      expect(data._id).toEqual('1');
    });

    let request = controller.expectOne('http://localhost:5000/api/user/view/1');
    request.flush(data.data[0]);
    expect(request.request.method).toBe('GET');
  });


  it('Should login when hit login endpoint',(done:DoneFn)=>{
    service.login(loginForm).subscribe((data) => {
      expect(data).toEqual(loginForm);
      done();
    });
    
    let request = controller.expectOne('http://localhost:5000/api/user/login');
    request.flush(loginForm);
    expect(request.request.method).toBe('POST');
})

it('Should register when hit register',(done:DoneFn)=>{
  service.register(registerForm).subscribe((data) => {
    expect(data).toEqual(registerForm);
    done();
  });
  
  let request = controller.expectOne('http://localhost:5000/api/user/register');
  request.flush(registerForm);
  expect(request.request.method).toBe('POST');
})

it('Should return current login user',(done:DoneFn)=>{
  service.getCurrentUser().subscribe((data) => {
    expect(data).toEqual(registerForm);
    done();
  });
  
  let request = controller.expectOne('http://localhost:5000/api/user/current');
  request.flush(registerForm);
  expect(request.request.method).toBe('GET');
})


it('Should update the user form',(done:DoneFn)=>{
  service.updateUserInfo('1',registerForm).subscribe((data) => {
    expect(data).toEqual(registerForm);
    done();
  });
  
  let request = controller.expectOne('http://localhost:5000/api/user/update/1');
  registerForm.firstName='test98';
  request.flush(registerForm);
  expect(request.request.method).toBe('PATCH');
})

it('Should delete the user detail',(done:DoneFn)=>{
  let deleteMessage = {
    success: true,
    message:'Deleted successfully!',
    error: false,
  }
  service.delete('1').subscribe((data) => {
    expect(data).toEqual(deleteMessage)
    done();
  });
  
  let request = controller.expectOne('http://localhost:5000/api/user/delete/1');
  registerForm.firstName='test98';
  request.flush(deleteMessage);
  expect(request.request.method).toBe('DELETE');
})

});
