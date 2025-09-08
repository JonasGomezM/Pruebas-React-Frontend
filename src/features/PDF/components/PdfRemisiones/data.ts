// data.ts

export const empresaList = {
  razon_social: "Transportes del Norte S.A. de C.V.",
  rfc: "TND123456789",
  direccion:
    "Avenida de los Insurgentes Sur 1234, Col. Del Valle, CDMX, México",
};

export const remisionList = {
  nombre_cliente: "Comercializadora La Esperanza",
  rfc_cliente: "CLE091203HK5",
  nombre_configuracion_armado: "Armado Estándar",
  folio_serie_remision: "REM-2025-001",
  nombre_tasa_iva: "IVA 16%",
  temperatura_producto: "Refrigerado 4°C",
  nombre_pedido: "PED-45987",
  fecha_solicitud: "2025-07-15",
  nombre_division_negocio: "Transporte Nacional",
  referencia: "REF-87965",
  nombre_moneda: "MXN - Pesos Mexicanos",
  nombre_tipo_operacion: "Venta Nacional",
  nombre_cliente_remitente: "Fábrica de Cartón México",
  direccion_cliente_remitente: "Calle Industria 100, Naucalpan, Edo. Mex.",
  nombre_cliente_destinatario: "Empaques Globales",
  direccion_cliente_destinatario: "Parque Industrial Apodaca, Monterrey, N.L.",
  subtotal: "$1,500.00",
  iva: "$240.00",
  retencion: "$60.00",
  total: "$1,680.00",
};

export const mercanciasList = [
  {
    nombre_mercancia: "Cartón Corrugado",
    nombre_unidad_peso: "Kilogramo",
    cantidad: "1000",
    piezas: "500",
    peso: "1200",
    nombnre_clave_unidad: "KGM",
    nombre_tipo_material: "Empaque",
    nombre_clave_producto_servicio: "14111507",
    material_peligroso: "No",
    nombre_clave_material_peligroso: "N/A",
    nombre_fraccion_arancelaria: "4819.10.01",
    nombre_embalaje: "Tarima de madera",
  },
  {
    nombre_mercancia: "Plástico Termoformado",
    nombre_unidad_peso: "Kilogramo",
    cantidad: "800",
    piezas: "400",
    peso: "950",
    nombnre_clave_unidad: "KGM",
    nombre_tipo_material: "Contenedor",
    nombre_clave_producto_servicio: "32121500",
    material_peligroso: "No",
    nombre_clave_material_peligroso: "N/A",
    nombre_fraccion_arancelaria: "3923.10.00",
    nombre_embalaje: "Caja de cartón",
  },
];

export const serviciosList = [
  {
    nombre_servicio: "Transporte foráneo",
    cantidad: "1",
    subtotal: "$1,000.00",
    iva: "$160.00",
    retencion: "$40.00",
    total: "$1,120.00",
    nombre_clave_producto_servicio: "78121603",
    nombre_clave_unidad: "",
    nombre_tasa_iva: "16%",
    nombre_retencion_iva: "4%",
  },
  {
    nombre_servicio: "Maniobras de carga",
    cantidad: "2",
    subtotal: "$500.00",
    iva: "$80.00",
    retencion: "$20.00",
    total: "$560.00",
    nombre_clave_producto_servicio: "78111804",
    nombre_clave_unidad: "E48 - Unidad de servicio",
    nombre_tasa_iva: "16%",
    nombre_retencion_iva: "4%",
  },
];
export const dataViaje = [
  {
    viaje: "Cartón",
    operador: "M85-Tonelada",
    armado: "3",
    piezas: "H87-Pieza",
    unidad: "1234122",
    remolque: "213342",
    dolly: "No",
    remolque2: "Z01",
    fecha: "N/A",
    estatus: "N/A",
  },
  {
    viaje: "Cartón",
    operador: "M85-Tonelada",
    armado: "3",
    piezas: "H87-Pieza",
    unidad: "1234122",
    remolque: "213342",
    dolly: "No",
    remolque2: "Z01",
    fecha: "N/A",
    estatus: "N/A",
  },
];
export const dataCFDI = [
  {
    Factura: "E-2758 ",
    fecha_factura: "18/01/202",
    UUID: "DF5A31D7-2FB5-4DAA-9312-2675FF51A5AB ",
    Tipo_relacion: "04- Sustitución de CFDI Relacionados",
  },
  {
    Factura: "E-2758 ",
    fecha_factura: "18/01/202",
    UUID: "DF5A31D7-2FB5-4DAA-9312-2675FF51A5AB ",
    Tipo_relacion: "04- Sustitución de CFDI Relacionados",
  },
];
export const dataGeneral = [
  {
    forma_pago: "02 Cheque nominativo",
    metodo_pago: "PUE Pago en una sola exhibición",
    uso_cfdi: "P01 Por definir",
    num_permiso: "No existe",
    tipo_permiso: "No existe",
    clave_nomenclatura: "No existe",
    configuracion_auto: "FULLL",
  },
  {
    forma_pago: "02 Cheque nominativo",
    metodo_pago: "PUE Pago en una sola exhibición",
    uso_cfdi: "P01 Por definir",
    num_permiso: "No existe",
    tipo_permiso: "No existe",
    clave_nomenclatura: "No existe",
    configuracion_auto: "FULLL",
  },
];
