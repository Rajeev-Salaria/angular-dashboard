import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { ProductService,UploadService } from 'src/app/services';
import { Product } from 'src/app/shared/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public form!:NgForm;
  private file!:File;
  public isDraging: boolean = false;
  @ViewChild('upload') upload!:ElementRef
  constructor(private _productService: ProductService, private _uploadService: UploadService,private _renderer:Renderer2) {
  }

public data!:any;
  ngOnInit() {
    this.products$ = this._productService.getProducts();

    fetch('http://localhost:5000/api/img').then(res=> res.json()).then(response => {this.data = response});

        console.log(this.data)
  }  

  ngAfterViewInit(){
    this._renderer.listen(this.upload.nativeElement,'dragenter', (event)=>{  this.isDraging = true; })
    this._renderer.listen(this.upload.nativeElement,'dragover', (event)=>{  this.isDraging = true;this.file = event.dataTransfer.files[0]; console.log(event);})
    this._renderer.listen(this.upload.nativeElement,'drop', (event)=>{ this.file = event.dataTransfer.files[0]; this.isDraging = false;})
    this._renderer.listen(this.upload.nativeElement,'dragleave', (event)=>{   this.isDraging = false; console.log(event);event.preventDefault();})
  }
  
  handleDragLeave(event:any){ 
    event.preventDefault();
 console.log('leave',event);
//  if(event.target.classList.contains('enter')){
//   event.target.classList.remove('enter');
//  }
//  event.target.classList.remove('enter');
  }

  handleDragEnter(event:any){
console.log('test')
  }

  handleDragOver(event:any){
    console.log('testover',event)
    // event.target.classList.add('enter');
  }

  onChange(event:any){
   this.file = event.target.files[0];
   console.log(this.file);
  }

  onSubmit(){
    console.log('upload')
    let formData = new FormData();
    formData.append("photo", this.file);
    this._uploadService.upload(formData).subscribe(data => console.log(data));
  }
   


  handleDrop(event:any){
    console.log('drop', event);
    this.file = event.dataTransfer.files[0];
  }
}
