import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  //value is always from left of pipe
  //then optional params delimited by :
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
