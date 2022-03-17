import { Component, Input, Pipe, AfterViewInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { launchDimensions, Product, launchMaturity } from './customer';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, startWith } from 'rxjs';
import * as FileSaver from 'file-saver';
import { MetricTypePipe } from './metric-type.pipe';
import {ViewEncapsulation} from '@angular/core'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated

})
export class AppComponent {
  title = 'zf-project';
  test:any[];
  maturity:any[];
  

  header = [
    { field: 'ldId', header: 'Id' },
    { field: 'projectNo', header: 'Project' },
    { field: 'maturityOrderNo', header: 'Maturity Order No' },
    { field: 'category', header: 'Category' },
    { field: 'amount', header: 'Amount' },
    { field: 'metricType', header: 'Metric Type' },
];

  constructor() {
  }
 
  
  ngOnInit() {
    this.maturity = [
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
        amount: 500.0,
        launchDimensionName: '# of Open 8D for Purchased Components',
      },
    ];
  
   
   

 
  
  
   
 
  }
  
}
