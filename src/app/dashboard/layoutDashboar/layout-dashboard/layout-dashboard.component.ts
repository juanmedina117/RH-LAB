import { Component, OnInit, signal } from '@angular/core';
import { MenuListInterface } from '../../../interfaces/menu.interface';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss'
})
export class LayoutDashboardComponent implements OnInit {


  public menuUsuario = signal<MenuListInterface []>(
    [
      {
        nombre:'vacaciones',
        ruta:'user/vacaciones'
      },
      {
        nombre:'incapacidad',
        ruta:'user/incapacidades'
      },
      {
        nombre:'horarios',
        ruta:'user/horarios'
      },
      {
        nombre:'reportes',
        ruta:'user/reportes'
      },
    ]
  );
  public menuAdmin = signal<string []>(['vacaciones','incapacidad','horarios','reportes','personal']);


  ngOnInit(): void {
    
    console.log('Layout...');
    
    
  
    
    
  }

}
