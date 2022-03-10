import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metricType'
})
export class MetricTypePipe implements PipeTransform {

  transform(metricType: string): any {
    console.log("Metric Type",metricType)
    switch (metricType) {
      case 'Percentage': 
        return `%`;
        
      case 'Number':
        return '#'
    }
  }

}
