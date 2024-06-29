export interface datosFechaInterface {
  activo: boolean;
  tipoConsulta: MotivoDias;
  data: Date[] | string[];
}

export type MotivoDias = 'vac' |'inc' | '';
