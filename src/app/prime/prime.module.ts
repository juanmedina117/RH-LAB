import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports:[
    CalendarModule
  ]
})
export class PrimeModule { }
