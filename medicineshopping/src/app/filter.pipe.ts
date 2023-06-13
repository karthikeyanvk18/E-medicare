import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if (value.length ==0 || filterString ===''){
      return value;
    }

    const employeeui  =  [];
    for (const row of value){
      if (row['productName'] === filterString){
        employeeui.push(row);
      }
      if (row['brand'] === filterString){
        employeeui.push(row);
      }
    }
    return employeeui;
  }
  
    

}