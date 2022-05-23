import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wireVersion'
})
export class WireVersionPipe implements PipeTransform {

  transform(value: number): string {

    switch (value) {

      case 1:

        return "Plan";

      case 2:

        return "Actual";

      default:

        return "";

    }

  }

}
