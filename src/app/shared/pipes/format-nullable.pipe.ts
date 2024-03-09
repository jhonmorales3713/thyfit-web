import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNullable'
})
export class FormatNullablePipe implements PipeTransform {

  transform(value: any, fallbackValue: string = '--'): string {
    // Check if the value is null or undefined
    if (value === null || value === undefined) {
      // If null or undefined, return the fallback value
      return fallbackValue;
    } else {
      // If not null or undefined, return the value as is
      return value.toString();
    }
  }

}
