import { RegisterForm } from 'src/app/shared/models';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value: RegisterForm[], searchTerm: any): RegisterForm[]{
    if(searchTerm !== ''){
 return value.filter((el)=> el.email.toLowerCase().includes(searchTerm.toLowerCase()) || el.city.toString().includes(searchTerm)) // method 1
 // return value.filter((el: { name: any; })=> el.name.toLowerCase().indexOf(searchTerm) > -1)       // method 2
    }
  return value
  }
  


}
