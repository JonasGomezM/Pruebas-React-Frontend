export interface AntiguedadSaldo {
  nombre_cliente: string;
  documento: string;
  fecha: string;
  fecha_vencimiento: string;
  dias: number;
  tipo: string;
  tipo_documento: string;
  moneda: string;
  tipo_cambio: number;
  saldo: number;
  rango_1_7v: number;
  rango_8_15v: number;
  rango_16_30v: number;
  mayor_31v: number;
  saldo_vencido: number;
  rango_1_7pv: number;
  rango_8_15pv: number;
  rango_16_30pv: number;
  mayor_31pv: number;
  saldo_por_vencer: number;
}

export interface RowData {
  cliente: string;
  doc: string;
  emision: string;
  venc: string;
  dias: number;
  tipo: string;
  tdoc: string;
  mon: string;
  tc: string;
  saldo: string;
  vencido: string;
  v1_7: string;
  v8_15: string;
  v16_30: string;
  v31: string;
  porVencer: string;
  pv1_7: string;
  pv8_15: string;
  pv16_30: string;
  pv31: string;
}

