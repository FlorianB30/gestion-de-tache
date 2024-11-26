import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToHour',
  standalone: true
})
export class DecimalToHourPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let time = value.toString().split('.')
    let hour = time[0]
    let minute = isNaN(parseFloat(time[1])) ? '' : (parseFloat(time[1]) * 60 / 100).toString()
    minute = minute.length === 1 ? minute + '0' : minute

    return hour + 'h' + minute;
  }

}
