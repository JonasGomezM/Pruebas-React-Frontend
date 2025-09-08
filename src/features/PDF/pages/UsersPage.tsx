import './UserPage.scss'; // Asegúrate de que esté importado aquí para el grid también
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import { MyDocument } from '../components/DownloadPDF/DownloadPDF';
// import { PdfLiquidacion } from '../components/PdfLiquidaciones-Final/PdfLiquidaciones';
import { PdfRemisiones } from '../components/PdfRemisiones/PdfRemisiones';
import { PdfPedidos} from '../components/PdfPedidos/PdfPedidos';
import { CargaCombustiblePDF } from '../components/PdfCargaCombustible/PdfCargaCombustible';
import { PdfCartaPorte } from '../components/PdfCartaPorte/PdfCartaPorte';
import { AntiguedadSaldosPDF } from '../components/PdfAntiguedadSaldos/PdfAntiguedadSaldo';
import {MiComponente} from "./../../typeScript/MyComponente";
import {Dashboard}  from '../../EJERCICIOS_REACT/layout';
// import Dashboard  from '../../EJERCICIOS_REACT/layout';



export const UsersPage = () => {
  
// const downloadPDF = () => {
//   console.log('Descargando PDF...');
// };


// const mockAntiguedadData: any[] = [
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
//   {
//     nombre_cliente: "ADN ENERGIA",
//     documento: "E-15940",
//     fecha: "22/05/2025",
//     fecha_vencimiento: "22/05/2025",
//     dias: 77,
//     tipo: "Vencido",
//     tipo_documento: "Directa",
//     moneda: "MXN",
//     tipo_cambio: 1.0,
//     saldo: 73920.0,
//     rango_1_7v: 0.0,
//     rango_8_15v: 0.0,
//     rango_16_30v: 0.0,
//     mayor_31v: 73920.0,
//     saldo_vencido: 73920.0,
//     rango_1_7pv: 0.0,
//     rango_8_15pv: 0.0,
//     rango_16_30pv: 0.0,
//     mayor_31pv: 0.0,
//     saldo_por_vencer: 0.0,
//   },
// ];

const frutas: string[] = ["banano", "manzana", "pera", "mora", "uva", "naranja"];

  return (
    <div className="user-card-grid">
      {/* <h1>Hola</h1> */}

      <div>
        <Dashboard />
      </div>
      {/* <div>
        <TodoApp frutas={frutas}/>
      </div> */}
      {/* <MiComponente/> */}
      {/* <PDFViewer width= "300%" height="490%"><PdfPedidos /></PDFViewer> */}
      {/* <PDFViewer width= "300%" height="490%"><PdfCartaPorte /></PDFViewer> */}
      {/* <PDFViewer width= "300%" height="490%"><AntiguedadSaldosPDF data={mockAntiguedadData} /></PDFViewer> */}
      {/* <PDFViewer width= "300%" height="490%"><MyDocument /></PDFViewer> */}
      {/* <PDFViewer width= "300%" height="490%"><PdfRemisiones /></PDFViewer> */}



      {/* <PDFDownloadLink document={<MyDocument />} fileName="Programación_de_unidades.pdf">
        <button className='button' onClick={downloadPDF}>descargar pdf</button>
      </PDFDownloadLink> */}
    </div>
  );
};
