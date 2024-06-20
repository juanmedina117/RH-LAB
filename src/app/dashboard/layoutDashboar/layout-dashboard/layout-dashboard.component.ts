import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss'
})
export class LayoutDashboardComponent implements OnInit {


  public menuUsuario = signal<string []>(['vacaciones','incapacidad','horarios','reportes']);
  public menuAdmin = signal<string []>(['vacaciones','incapacidad','horarios','reportes','personal']);


  ngOnInit(): void {
    
    console.log('Layout...');
    
    
  
    
    
  }

}
