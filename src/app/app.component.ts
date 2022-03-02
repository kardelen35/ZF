import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LazyLoadEvent, SortEvent } from 'primeng/api';
import { CustomerServiceService } from './customer-service.service';
import { launchDimensions, launchMaturity, Product } from './customer';
import { textChangeRangeIsUnchanged } from 'typescript';
import { FormControl } from '@angular/forms';
import { filter, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zf-project';

  totalRecords: number;

  cols: any[];
  test: any[];

  loading: boolean;

  launchMaturity: any[];
  launchDimensions: any[];
  product:Product[];
  productFormControl:FormControl

  // Search Text
  
  options:any[];
  filteredOptions:Observable<string[]>;

  
  lockedlaunchDimension: any[];

  selectedCustomers: launchDimensions[];
  localStorageData:[];

  constructor(private customerService: CustomerServiceService) {}

  ngOnInit() {
    //Search Text 
    this.productFormControl = new FormControl();
    this.filteredOptions = this.productFormControl.valueChanges.pipe(
    startWith(''),
    map(value=>this.productFilter(value))
    )
    
    this.launchMaturity = [
      {
        launchMaturityId: 123,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 18,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 82.0,
        secondValue: 100.0,
        actualValue: 82.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 123.0,
        metricType: 'Percentage',
        launchDimensionName: 'Product Approval (PPAP) for Purchased Components',
      },
      {
        launchMaturityId: 406,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 1,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        metricType: 'Number',

        firstValue: 90.0,
        secondValue: 100.0,
        actualValue: 90.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 123.0,
        launchDimensionName: 'Qualification of Shop Floor Staff',
      },
      {
        launchMaturityId: 131,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 46,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 85.0,
        secondValue: 87.0,
        actualValue: 97.7,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: 'Technical Availability',
      },
      {
        launchMaturityId: 232,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 56,
        maturityOrderNo: 0,
        metricType: 'Percentage',

        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 87.0,
        firstValue: 87.0,
        secondValue: 100.0,
        actualValue: 87.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: 'OEE',
      },
      {
        launchMaturityId: 319,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 17,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 23.0,
        secondValue: 85.0,
        actualValue: 27.06,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 5555.0,
        launchDimensionName: 'Process Capability Analysis in Manufacturing',
      },
      {
        launchMaturityId: 183,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 45,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 83.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 100.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: '# of NCT',
      },
      {
        launchMaturityId: 635,
        projectNo: '0000025690',
        lmVersion: null,
        metricType: 'Percentage',

        ldId: 34,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventmuhammed',
        goal: 470.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 35.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 523.0,
        launchDimensionName: '# of Pending Eng Changes',
      },
      {
        launchMaturityId: 247,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 109,
        maturityOrderNo: 0,
        metricType: 'Percentage',

        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventmuhammed',
        goal: 88.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 47.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 523.0,
        launchDimensionName: '# of Safety Incidents',
      },
      {
        launchMaturityId: 71,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 2,
        maturityOrderNo: 0,
        metricType: 'Percentage',

        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 42.0,
        secondValue: 300.0,
        actualValue: 14.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 2300.0,
        launchDimensionName: 'Process Approval',
      },
      {
        launchMaturityId: 355,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 60,
        maturityOrderNo: 0,
        metricType: 'Percentage',

        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 10.0,
        firstValue: 10.0,
        secondValue: 100.0,
        actualValue: 10.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: 'Availability - Set Up Performance',
      },
      {
        launchMaturityId: 136,
        projectNo: '0000025690',
        lmVersion: null,
        metricType: 'Percentage',

        ldId: 16,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventmuhammed',
        goal: 67.0,
        firstValue: 11.0,
        secondValue: 32.0,
        actualValue: 34.38,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 123.0,
        launchDimensionName: 'Productivity - Fulfillment of Cycle Time',
      },
      {
        launchMaturityId: 288,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 29,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 67.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 2300.0,
        launchDimensionName: '# of Deviation Requests',
      },
      {
        launchMaturityId: 2,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 59,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 350.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 270.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: '# of Production Process Deviations',
      },
      {
        launchMaturityId: 146,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 49,
        maturityOrderNo: 0,
        metricType: 'Percentage',

        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 100.0,
        firstValue: 85.0,
        secondValue: 90.0,
        actualValue: 94.44,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 5000.0,
        launchDimensionName:
          'Product Approval (ISIR) for ZF In-House Components',
      },
      {
        launchMaturityId: 141,
        projectNo: '0000025690',
        lmVersion: null,
        metricType: 'Percentage',

        ldId: 4,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 93.0,
        firstValue: 24.0,
        secondValue: 48.0,
        actualValue: 50.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: 'Quality - First Pass Yield',
      },
      {
        launchMaturityId: 263,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 38,
        maturityOrderNo: 0,
        category: 'ZF1',
        metricType: 'Percentage',

        metricResponsible: 'muhammed',
        buildEvent: 'eventmuhammed',
        goal: 50.0,
        firstValue: 12.0,
        secondValue: 25.0,
        actualValue: 48.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 523.0,
        launchDimensionName: 'Premium Freight',
      },
      {
        launchMaturityId: 219,
        projectNo: '0000025690',
        lmVersion: null,
        ldId: 57,
        metricType: 'Percentage',

        maturityOrderNo: 0,
        category: 'ZF1',
        metricResponsible: 'muhammed',
        buildEvent: 'eventnew',
        goal: 470.0,
        firstValue: 0.0,
        secondValue: 0.0,
        actualValue: 22.0,
        isReleased: true,
        dateOfRelease: '2022-02-17T00:00:00',
        amount: 500.0,
        launchDimensionName: '# of Open 8D for Purchased Components',
      },
    ];
    this.launchDimensions = [
      {
        id: 1,
        name: 'Qualification of Shop Floor Staff',
        cat: 'ZF12',
        group: 'Organizational Maturity',
        metricType: 'Percentage',
      },
      {
        id: 49,
        name: 'Product Approval (ISIR) for ZF In-House Components',
        cat: 'ZF123',
        group: 'Quality Performance',
        metricType: 'Percentage',
      },
      {
        id: 18,
        name: 'Product Approval (PPAP) for Purchased Components',
        cat: 'ZF123',
        group: 'Quality Performance',
        metricType: 'Percentage',
      },
      {
        id: 17,
        name: 'Process Capability Analysis in Manufacturing',
        cat: 'ZF123',
        group: 'Quality Performance',
        metricType: 'Percentage',
      },
      {
        id: 2,
        name: 'Process Approval',
        cat: 'ZF123',
        group: 'Quality Performance',
        metricType: 'Percentage',
      },
      {
        id: 46,
        name: 'Technical Availability',
        cat: 'ZF12',
        group: 'Productivity',
        metricType: 'Percentage',
      },
      {
        id: 4,
        name: 'Quality - First Pass Yield',
        cat: 'ZF123',
        group: 'Productivity',
        metricType: 'Percentage',
      },
      {
        id: 16,
        name: 'Productivity - Fulfillment of Cycle Time',
        cat: 'ZF12',
        group: 'Productivity',
        metricType: 'Percentage',
      },
      {
        id: 60,
        name: 'Availability - Set Up Performance',
        cat: 'ZF123',
        group: 'Productivity',
        metricType: 'Percentage',
      },
      {
        id: 56,
        name: 'OEE',
        cat: 'ZF12',
        group: 'Productivity',
        metricType: 'Percentage',
      },
      {
        id: 109,
        name: '# of Safety Incidents',
        cat: 'ZF1',
        group: 'H and E',
        metricType: 'Number',
      },
      {
        id: 59,
        name: '# of Production Process Deviations',
        cat: 'ZF1',
        group: 'Internal Quality',
        metricType: 'Number',
      },
      {
        id: 29,
        name: '# of Deviation Requests',
        cat: 'ZF1',
        group: 'Internal Quality',
        metricType: 'Number',
      },
      {
        id: 34,
        name: '# of Pending Eng Changes',
        cat: 'ZF1',
        group: 'Internal Quality',
        metricType: 'Number',
      },
      {
        id: 57,
        name: '# of Open 8D for Purchased Components',
        cat: 'ZF1',
        group: 'External Quality',
        metricType: 'Number',
      },
      {
        id: 45,
        name: '# of NCT',
        cat: 'ZF1',
        group: 'External Quality',
        metricType: 'Number',
      },
      {
        id: 38,
        name: 'Premium Freight',
        cat: 'ZF1',
        group: 'Capital or Financial',
        metricType: 'Percentage',
      },
    ];
    this.lockedlaunchDimension=[{
      launchMaturityId: 219,
      projectNo: '0000025690',
      lmVersion: null,
      maturityOrderNo: 0,
      amount: 123.0,
      category: 'ZF1',
      metricType: 'Percentage'
    }]
    this.product = [
      { id:1,name:"playstation",category:"game",price:3000,stock:2},
      { id:2,name:"player",category:"game",price:2000,stock:5},
      { id:3,name:"Bilgisayar",category:"Teknoloji",price:8000,stock:8},
      {id: 4,name: "kindle", category: "books", price:2000, stock: 4},
      {id: 5,name: "coffee table",category: "mobilya",price:345,stock: 6},
      {id: 6,name: "lamp",category: "books",price:345,stock: 5},
      {id: 7,name: "reeder",category: "books",price:456,stock: 9}
    ]
  }
  private productFilter(value:string):any[]{
   let searchData = JSON.parse(localStorage.getItem("searchData") || '[]')
   searchData += []
   const isDataMax = searchData.length
   const workingProduct = isDataMax ? searchData.split(',') :searchData;
   const updateProduct = workingProduct.concat(value);

   localStorage.setItem("searchData",JSON.stringify(updateProduct))
  
 
    this.options=this.product.map(product=>product.name)
    const filterValue = value.toString().toLocaleLowerCase();
    return this.options.filter(option =>option.toString().toLocaleLowerCase().includes(filterValue));

  }

  toggleLock(data:any, frozen:any, index:any) {
    if (frozen) {
        this.lockedlaunchDimension = this.lockedlaunchDimension.filter((c, i) => i !== index);
        this.launchMaturity.push(data);
    }
    else {
        this.launchMaturity = this.launchMaturity.filter((c, i) => i !== index);
        this.lockedlaunchDimension.push(data);
    }

    this.launchMaturity.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
    });
}
  getData() {
    this.test=this.launchMaturity.filter((a) => {
      return this.launchDimensions.some((b) => {
        return a.ldId === b.id;
      });
    });
  }
  // public getLaunchDimensionMetricType(Id:any) : string {
  //   return this.launchDimensions.find(a => a.id === Id).metricType === "Percentage" ? "%" : "#"
  // }
  public productSearch(){
    return this.product.filter(a=>console.log("A",a))
  }
  loadCustomers(event: LazyLoadEvent) {
    this.getData();
    setTimeout(() => {
      this.launchDimensions.forEach((data) => {
        const dimensionsData = Object.keys(data);
        this.totalRecords = dimensionsData.length;
      });
    }, 1000);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.launchDimensions.filter((value) => {
      return;
    });
  }
  customSort(event: any) {
    console.log('Sorted', event);
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
}
