import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'wholeNumber'
})
export class WholeNumberPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: any, ...args: any[]): any {
    return this.decimalPipe.transform(value, '1.0-0');
  }

}
