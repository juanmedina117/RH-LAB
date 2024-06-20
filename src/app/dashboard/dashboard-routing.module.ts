import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../auth/layoutAuth/layout-auth/layout-auth.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { IncapacidadesComponent } from './components/incapacidades/incapacidades.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { LayoutDashboardComponent } from './layoutDashboar/layout-dashboard/layout-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutDashboardComponent,
    children:[
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'user',
        component:UserComponent,
        children:[
          {
            path:'vacaciones',
            component:VacacionesComponent
          },
          {
            path:'incapacidades',
            component:IncapacidadesComponent
          },
          {
            path:'horarios',
            component:HorariosComponent
          },
          {
            path:'reportes',
            component:ReportesComponent
          }
        ]
      },
      {
        path:'**',
        redirectTo:'user'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
