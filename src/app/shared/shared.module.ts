import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PrimeModule } from '../prime/prime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CalendarioComponent
  ]
})
export class SharedModule { }
