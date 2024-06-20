import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from './layoutAuth/layout-auth/layout-auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegiterComponent } from './pages/regiter/regiter.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegiterComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
