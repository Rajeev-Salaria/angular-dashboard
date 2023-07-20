import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product list', () => {
 let products = [{
  id: 'string',
  title:  'Jean',
  price: 1234,
  description:  'Awesome Jean',
  category: 'Men',
  image:  'local',
  rating: {
      rate: 5,
      count:  '1200',
  }
 },{
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
 }]

    service.getProducts().subscribe(data=>{
      expect(data).toEqual(products);
    })

    let request = controller.expectOne("http://localhost:5000/api/allProducts");
    request.flush(products);
    expect(request.request.method).toBe('GET');


  });

});
