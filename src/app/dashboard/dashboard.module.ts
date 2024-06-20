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
    SharedModule
  ]
})
export class DashboardModule { }
