import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, status : string): any {
    let resultArray = [];
    if(value.length == 0 || filteredStatus == "all"){
      return value;
    }
    for(let todo of value){
      if(todo[status] == filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray ;
  }

}
