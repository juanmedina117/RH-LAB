import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {
  MotivoDias,
  datosFechaInterface,
} from '../../../interfaces/datos-fechas.interface';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss',
})
export class CalendarioComponent {
  @Output() activo: EventEmitter<datosFechaInterface> =
    new EventEmitter<datosFechaInterface>();
  @Input({ required: true }) motivo!: MotivoDias;

  public es: any;
  public dates!: Date[] | undefined;
  public minDate = signal<Date | undefined>(undefined);
  public maxDate = signal<Date | undefined>(undefined);
  public diasSeleccionados = signal<datosFechaInterface>({
    activo: false,
    data: [],
    tipoConsulta: '',
  });

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.configuracionCalendar();
    this.limiteFechas();

  }

  private configuracionCalendar() {
    this.primengConfig.setTranslation({
      dayNames: [
        'Lunes',
        'Martes',
        'Miercolees',
        'Jueves',
        'Viernees',
        'Sabado',
        'Domingo',
      ],
      dayNamesShort: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
      dayNamesMin: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      today: 'Hoy',
      //translations
    });
  }

  private limiteFechas() {
    this.maxDate.set(new Date());
  }

  public capturaFechas() {


    this.diasSeleccionados.update((value) =>
      this.dates
        ? (value = {
            activo: true,
            data: this.dates,
            tipoConsulta: this.motivo,
          })
        : (value = {
            activo: false,
            data: [],
            tipoConsulta: this.motivo,
          })
    );


    this.activo.emit(this.diasSeleccionados());
  }
}
