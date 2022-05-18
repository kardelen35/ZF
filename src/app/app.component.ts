import { Component, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DataFilter, launchDimensions, Product } from './customer';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  zip,
} from 'rxjs';
import * as FileSaver from 'file-saver';
import { MetricTypePipe } from './metric-type.pipe';
import { ViewEncapsulation } from '@angular/core';
import { WireVersionPipe } from './wire-version.pipe';
import { Table } from 'primeng/table';
import { Directive, ElementRef } from '@angular/core';
import { MaturityDTO } from './Model/maturityDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zf-project';

  totalRecords: number;
  cols: any[];

  selectedProducts: any[];
  loading: boolean;
  dataHistory: boolean;
  launchMaturity: any[];
  launchDimensions: any[];
  products: any[];
  productFormControl: FormControl;
  options: any[];
  filteredOptions: Observable<string[] | null>;
  exportColumns: any[];
  localStorageData: any[];
  formatData: any[];
  sortableAndFilteredData: any[];
  selectAll: boolean = false;
  exportable: boolean = false;
  public addMode = false;
  maturities: MaturityDTO;
  public isDisabled: boolean = true;
  public newAttribute: any = {};
  //Search

  search: string;
  searchText: any;
  results: string[];
  clonedProducts: any;

  wireVersionFilters: DataFilter[];
  @ViewChild('dt') table: Table;

  constructor(
    private metricPipe: MetricTypePipe,
    private wirePipe: WireVersionPipe
  ) {}

  ngOnInit() {
    this.productFormControl = new FormControl();
    this.filteredOptions = this.productFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      map((value) => this.productFilter(value))
    );

    this.launchMaturity = [
      {
        id: 233,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 1.0,

        actualValue: 2.0,

        date: '2021-10-01T00:00:00',
      },

      {
        id: 118,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-10-01T00:00:00',
      },

      {
        id: 148,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-10-01T00:00:00',
      },

      {
        id: 168,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-11-01T00:00:00',
      },

      {
        id: 213,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 3.0,

        actualValue: 1.0,

        date: '2021-11-01T00:00:00',
      },

      {
        id: 155,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 6.0,

        actualValue: 3.0,

        date: '2021-11-01T00:00:00',
      },

      {
        id: 257,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 0.0,

        actualValue: 0.0,

        date: '2021-11-02T18:30:00',
      },

      {
        id: 224,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 0.0,

        actualValue: 0.0,

        date: '2021-11-02T18:30:00',
      },

      {
        id: 285,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 0.0,

        actualValue: 0.0,

        date: '2021-11-02T18:30:00',
      },

      {
        id: 135,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 1.0,

        actualValue: 2.0,

        date: '2021-11-11T09:22:05.833',
      },

      {
        id: 134,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 237,

        plannedValue: 5.0,

        actualValue: 5.0,

        date: '2021-11-11T09:22:05.833',
      },

      {
        id: 194,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 1.0,

        actualValue: 2.0,

        date: '2021-11-11T09:22:35.913',
      },

      {
        id: 120,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 237,

        plannedValue: 5.0,

        actualValue: 5.0,

        date: '2021-11-11T09:22:35.913',
      },

      {
        id: 312,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-12-02T18:30:00',
      },

      {
        id: 245,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-12-02T18:30:00',
      },

      {
        id: 188,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 2.0,

        actualValue: 2.0,

        date: '2021-12-02T18:30:00',
      },

      {
        id: 367,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 2.0,

        actualValue: 1.0,

        date: '2022-02-02T23:00:00',
      },

      {
        id: 277,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 3.0,

        actualValue: 1.0,

        date: '2022-02-02T23:00:00',
      },

      {
        id: 280,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 3.0,

        actualValue: 1.0,

        date: '2022-02-02T23:00:00',
      },

      {
        id: 338,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 1.0,

        actualValue: 1.0,

        date: '2022-03-02T21:00:00',
      },

      {
        id: 256,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 3.0,

        actualValue: 3.0,

        date: '2022-03-02T21:00:00',
      },

      {
        id: 453,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 0.0,

        actualValue: 2.0,

        date: '2022-03-02T21:00:00',
      },

      {
        id: 499,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 2.0,

        actualValue: 4.0,

        date: '2022-04-02T21:00:00',
      },

      {
        id: 322,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 269,

        plannedValue: 3.0,

        actualValue: 4.0,

        date: '2022-04-02T21:00:00',
      },

      {
        id: 383,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 2.0,

        actualValue: 3.0,

        date: '2022-04-02T21:00:00',
      },

      {
        id: 501,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 1.0,

        actualValue: 0.0,

        date: '2022-04-02T21:00:00',
      },

      {
        id: 308,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 342,

        plannedValue: 2.0,

        actualValue: 1.0,

        date: '2022-08-02T21:00:00',
      },

      {
        id: 565,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 269,

        plannedValue: 0.0,

        actualValue: 0.0,

        date: '2022-08-02T21:00:00',
      },

      {
        id: 340,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 322,

        plannedValue: 2.0,

        actualValue: 0.0,

        date: '2022-08-02T21:00:00',
      },

      {
        id: 625,

        sdText: null,

        projectNumber: '0000025690',

        version: '',

        softwareDimensionId: 378,

        plannedValue: 0.0,

        actualValue: 0.0,

        date: '2022-08-02T21:00:00',
      },
    ];

    this.cols = [
      { field: 'date', header: 'date' },
      { field: 'id', header: 'id' },
      { field: 'sdText', header: 'sdText' },
      { field: 'projectNumber', header: 'projectNumber' },
      { field: 'version', header: 'version' },
      { field: 'softwareDimensionId', header: 'softwareDimensionId' },
      { field: 'plannedValue', header: 'plannedValue' },
      { field: 'actualValue', header: 'actualValue' },
    ];
    this.products = [
      { id: 1, name: 'playstation', category: 'Game', price: 3000, stock: 2 },
      { id: 2, name: 'player', category: 'Game', price: 2000, stock: 5 },
      {
        id: 3,
        name: 'Bilgisayar',
        category: 'Technology',
        price: 8000,
        stock: 8,
      },
      { id: 4, name: 'kindle', category: 'Books', price: 2000, stock: 4 },
      {
        id: 5,
        name: 'coffee table',
        category: 'Furniture',
        price: 345,
        stock: 6,
      },
      { id: 6, name: 'lamp', category: 'Books', price: 345, stock: 5 },
      { id: 7, name: 'reeder', category: 'Books', price: 456, stock: 9 },
    ];

    this.formatProduct(this.launchMaturity);
    this.handleFilter(this.formatData);

    //Search

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }
  public formatProduct(value: any) {
    this.formatData = [];
    this.exportable = true;

    value.map((a: any) => this.formatData.push(a));

    // for (let i = 0; i < this.formatData.length; i++) {
    //   let type = this.formatData[i].metricType;
    //   let metric = this.metricPipe.transform(type);
    //   this.formatData[i].metricType = metric;
    // }
  }
  public handleFilter(value: any) {
    this.sortableAndFilteredData = [];
    if (this.exportable == true) {
      value.filteredValue.map((a: any) => this.sortableAndFilteredData.push(a));
    }
  }
  public prepareFilters(): void {
    this.wireVersionFilters = [];
    this.formatData.forEach((filtered) => {
      const wireVersionFilter: DataFilter = {
        value: filtered.value,
        label: new WireVersionPipe().transform(filtered.value),
      };
      this.wireVersionFilters.findIndex(
        (current) => current.value === wireVersionFilter.value
      ) === -1
        ? this.wireVersionFilters.push(wireVersionFilter)
        : null;
    });
  }

  public onwireVersionChange(event: any) {
    const selectedValues = event.value.map(
      (datatableFilter: any) => datatableFilter.value
    );
    this.table.filter(selectedValues, 'value', 'in');
  }

  //Search
  public searchProduct(event: any) {
    console.log('Products', this.products);
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.products.length; i++) {
      let p = this.products[i];

      if (p.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(p.name);
      }
      this.results = filtered;
    }
    let result = this.results.includes(query);

    if (result == false) {
      setTimeout(() => {
        debounceTime(200);
        let searchData = JSON.parse(localStorage.getItem('searchData') || '[]');
        searchData += [];
        const isDataMax = searchData.length;
        const workingProduct = isDataMax ? searchData.split(',') : searchData;
        const updateProduct = workingProduct.concat(query);
        localStorage.setItem('searchData', JSON.stringify(updateProduct));
      }, 1000);
    }
  }


  //Edit
  onRowEditInit(product: any) {
    this.launchMaturity = { ...product };
  }
  onRowEditCancel(product: Product, index: number) {
    this.formatData[index] = this.launchMaturity[product.id];
    delete this.launchMaturity[product.id];
  }
  onRowEditSave(product: any) {
    this.launchMaturity.push(product);
    return this.launchMaturity;
  }


  //Add
  triggerAdd() {
     
    this.addMode = !this.addMode;
  }
  onRowAddSave(customer: any) {
    console.log("Customerr",customer)
    console.log("New Att",Object.keys(this.newAttribute).length)
    if(Object.keys(customer).length !== 0 ){
   
      this.launchMaturity.push(customer);
      this.formatProduct(this.launchMaturity);
      this.addMode = false;
      this.newAttribute = {};
    }
 
    
    
  }
  onRowCancelSave() {
    this.addMode = false;
  }



  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.sortableAndFilteredData);
      this.exportable = true;
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  private productFilter(value: string): any[] {
    let searchData = JSON.parse(localStorage.getItem('searchData') || '[]');
    searchData += [];
    const isDataMax = searchData.length;
    const workingProduct = isDataMax ? searchData.split(',') : searchData;
    const updateProduct = workingProduct.concat(value);

    if (value && value != '') {
      localStorage.setItem('searchData', JSON.stringify(updateProduct));
      const localData = localStorage.getItem('searchData');
    }

    this.options = this.products.map((product) => product.name);
    const filterValue = value.toString().toLocaleLowerCase();
    return this.options.filter((option) =>
      option.toString().toLocaleLowerCase().includes(filterValue)
    );
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;

    this.selectedProducts = value;
  }

  customSort(event: any) {
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
