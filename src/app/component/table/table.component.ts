import {  OnInit } from '@angular/core';
import { launchMaturity } from '../../customer';
import { Component, Input, Pipe } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { launchDimensions, Product } from '../../customer';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, startWith } from 'rxjs';
import * as FileSaver from 'file-saver';
import { MetricTypePipe } from '../../metric-type.pipe';
import {ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  @Input () colData:any
  @Input () formatData:any[]
  
    totalRecords: number; 
    colsData: any[];
    selectedProducts: any[];
    loading: boolean;
    launchMaturity: any[];
    launchDimensions: any[];
    products:any[];
    productFormControl:FormControl
    options:any[];
    filteredOptions:Observable<string[] | null>;
    exportColumns:any[];
    localStorageData:any[];
    // formatData:any[];
    sortableAndFilteredData:any[]
  
    //Search
  
    search:string;
    results: string[];
    clonedProducts: any[];
  
    constructor(private metricPipe:MetricTypePipe) {
    }
    
  
    ngOnInit() {
      console.log("Format",this.formatData)
      this.productFormControl = new FormControl();
      this.filteredOptions = this.productFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
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
          dateOfRelease: '2022-02-18T00:00:00',
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
          dateOfRelease: '2022-02-18T00:00:00',
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
          dateOfRelease: '2022-02-18T00:00:00',
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
          dateOfRelease: '2022-02-20T00:00:00',
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
          dateOfRelease: '2022-02-20T00:00:00',
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
          dateOfRelease: '2022-02-20T00:00:00',
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
          dateOfRelease: '2022-02-20T00:00:00',
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
          dateOfRelease: '2022-02-20T00:00:00',
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
      this.colsData = [
        { field: 'dateOfRelease', header: 'Date'},
        { field: 'ldId', header: 'Id' },
        { field: 'projectNo', header: 'Project' },
        { field: 'maturityOrderNo', header: 'Maturity Order No' },
        { field: 'category', header: 'Category' },
        { field: 'amount', header: 'Amount' },
        { field: 'metricType', header: 'Metric Type' },
    ];
    this.formatProduct(this.launchMaturity)
    this.handleFilter(this.formatData)
    
  
    //Search
      this.products = [
        { id:1,name:"playstation",category:"Game",price:3000,stock:2},
        { id:2,name:"player",category:"Game",price:2000,stock:5},
        { id:3,name:"Bilgisayar",category:"Technology",price:8000,stock:8},
        {id: 4,name: "kindle", category: "Books", price:2000, stock: 4},
        {id: 5,name: "coffee table",category: "Furniture",price:345,stock: 6},
        {id: 6,name: "lamp",category: "Books",price:345,stock: 5},
        {id: 7,name: "reeder",category: "Books",price:456,stock: 9}
      ]
      this.exportColumns=this.colsData.map(col=>({title:col.header,dataKey:col.field}));
    }
    public formatProduct(value:any){
      // this.formatData = []
      // value.map((a:any)=> this.formatData.push(a))
      // console.log("Format Data",this.formatData)
      for(let i = 0; i<this.formatData.length; i++){
        let type = this.formatData[i].metricType
        let metric =this.metricPipe.transform(type)
        this.formatData[i].metricType = metric

      }
     
    }
    public handleFilter(value:any){
      this.sortableAndFilteredData = [];
      value.filteredValue.map((a:any)=>this.sortableAndFilteredData.push(a))
      console.log("")
    
    }
  
    //Search 
    public searchProduct(event:any) {   
        let filtered:any[] = [];
        let query = event.query;
        for(let i = 0; i<this.products.length; i++){
          let p = this.products[i]
          
          if(p.name.toLowerCase().indexOf(query.toLowerCase()) == 0){
            filtered.push(p.name)
          }
          this.results = filtered;
        }
        let result = this.results.includes(query)
  
        if(result == false){
          setTimeout(()=>{
            debounceTime(200)
            let searchData = JSON.parse(localStorage.getItem("searchData") || '[]')
            searchData += []
            const isDataMax = searchData.length
            const workingProduct = isDataMax ? searchData.split(',') :searchData;
            const updateProduct = workingProduct.concat(query);
            localStorage.setItem("searchData",JSON.stringify(updateProduct))
          },1000)
        }
  }
  
  onRowEditInit(product: any) {
  
    this.clonedProducts = {...product};
   
  }
  onRowEditCancel(product: Product, index: number) {
    this.formatData[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }
  onRowEditSave(product: any) {
    this.clonedProducts
    this.clonedProducts = Object.keys(product)
    return this.clonedProducts
  
  }
  
  
    exportExcel() {
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(xlsx ? this.sortableAndFilteredData : this.formatData);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "products");
      });
  }
  
  
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
    private productFilter(value:string):any[]{
     let searchData = JSON.parse(localStorage.getItem("searchData") || '[]')
     searchData += []
     const isDataMax = searchData.length
     const workingProduct = isDataMax ? searchData.split(',') :searchData;
     const updateProduct = workingProduct.concat(value);
  
     if(value && value != ""){
      localStorage.setItem("searchData",JSON.stringify(updateProduct))
      const localData = localStorage.getItem('searchData');
      
     }
  
      this.options=this.products.map(product=>product.name)
      const filterValue = value.toString().toLocaleLowerCase();
      return this.options.filter(option =>option.toString().toLocaleLowerCase().includes(filterValue));
  
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
