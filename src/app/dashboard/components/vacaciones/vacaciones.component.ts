import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.scss'
})
export class VacacionesComponent implements OnInit {
  public es:any;

  constructor(
    private primengConfig: PrimeNGConfig,
  ){

  }

  ngOnInit(): void {

    this.primengConfig.setTranslation({
      dayNames: ['Lunes', 'Martes','Miercolees','Jueves','Viernees','Sabado','Domingo'],
      dayNamesShort: ['Lu', 'Ma', 'Mi','Ju','Vi','Sa','Do'],
      dayNamesMin:['L', 'M', 'M','J','V','S','D'],
      monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      today:'Hoy'
      //translations
  });

  }


  public date: Date[] | undefined;


}
