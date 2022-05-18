import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';  
import {InputTextModule} from 'primeng/inputtext';

import {MatFormFieldModule} from '@angular/material/form-field';

import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MetricTypePipe } from './metric-type.pipe';
import { ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentPipe } from '@angular/common';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { WireVersionPipe } from './wire-version.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MetricTypePipe,
    WireVersionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    CalendarModule,
		SliderModule,
		DialogModule,
    HttpClientModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
    FormsModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    
    
    
  ],
  providers: [MetricTypePipe,WireVersionPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
