import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ProductService } from 'src/app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service:ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpClientTestingModule],
      providers: [ProductService],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call async function and return list', fakeAsync(() => {

    let data = [
      {
      id: 'string',
      title:  'Iphone',
      price: 50000,
      description:  'Iphone',
      category: 'All',
      image:  'local',
      rating: {
          rate: 5,
          count:  '120000',
      }
    },{
        id: 'string',
        title:  'shirt',
        price: 50000,
        description:  'Iphone',
        category: 'All',
        image:  'local',
        rating: {
            rate: 5,
            count:  '120000',
        }}
      ]


        
      
    spyOn(service,'getProducts').and.returnValue(of(data))
    component.ngOnInit()
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      fixture.detectChanges();
      let el = fixture.debugElement.nativeElement.querySelectorAll('.product-title')
      
      for(let i = 0; i < el.length; i++){
       expect(el[i].textContent).toBe(data[i].title);
       expect(el[i].textContent).withContext(data[i].title);
      }
    });
   




  }))
  
});
