import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { LayoutDashboardComponent } from './layoutDashboar/layout-dashboard/layout-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { IncapacidadesComponent } from './components/incapacidades/incapacidades.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { RouterModule } from '@angular/router';
import { PrimeModule } from '../prime/prime.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    LayoutDashboardComponent,
    VacacionesComponent,
    IncapacidadesComponent,
    HorariosComponent,
    ReportesComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    PrimeModule,
    FormsModule
    ]
})
export class DashboardModule { }
