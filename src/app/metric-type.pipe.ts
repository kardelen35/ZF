import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metricType'
})
export class MetricTypePipe implements PipeTransform {

  transform(metricType: string): any {
    switch (metricType) {
      case 'Percentage': 
        return `%`;
      case 'Number':
        return '#'
    }
  }
  // transform(value: number, metricType: string): string {
  //   console.log("Value :",value + "" + "Metric Type",metricType)
  //   switch (metricType) {
  //     case '%': 
  //       return `${value}`;
  //     default: 
  //       return '--'
  //   }
  // }
}
