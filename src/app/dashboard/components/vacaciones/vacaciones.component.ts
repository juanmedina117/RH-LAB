import { Component, OnInit, computed, signal } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { datosFechaInterface } from '../../../interfaces/datos-fechas.interface';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.scss',
})
export class VacacionesComponent implements OnInit {
  public dataActivacionHijo = signal<datosFechaInterface>({activo:false,data:[],tipoConsulta:'vac'});

  public activarBoton = computed(() => {
    return this.dataActivacionHijo();
  });

  constructor() {}

  ngOnInit(): void {}

  public cambioValorBoton(dato: datosFechaInterface) {
    this.dataActivacionHijo.update((value) => dato);

    console.log(this.dataActivacionHijo());
  }
}
