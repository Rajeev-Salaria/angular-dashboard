import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../directives/sortable.directive';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value: Country[], searchTerm: any): Country[]{
    if(searchTerm !== ''){
 return value.filter((el)=> el.name.toLowerCase().includes(searchTerm.toLowerCase()) || el.population.toString().includes(searchTerm) || el.area.toString().includes(searchTerm)) // method 1
 // return value.filter((el: { name: any; })=> el.name.toLowerCase().indexOf(searchTerm) > -1)       // method 2
    }
  return value
  }
  


}
