import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  transform(value: any, code: any): any {
    switch(code){
      case 'US' : return "+1" + value;
      case 'AUS' : return "+12" + value;
      case 'EUR' : return "+31" + value;
      default : return "+91" + value;
    }

  }

}
