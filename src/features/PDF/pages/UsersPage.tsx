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
import TodoApp from '../../EJERCICIOS_REACT/ToDoApp';
// import Dashboard  from '../../EJERCICIOS_REACT/layout';



export const UsersPage = () => {
  
// const downloadPDF = () => {
//   console.log('Descargando PDF...');
// };

const frutas: string[] = ["banano", "manzana", "pera", "mora", "uva", "naranja"];

  return (
    <div className="user-card-grid">
      {/* <h1>Hola</h1> */}

      <PDFViewer width= "150%" height="6000%"><CargaCombustiblePDF /></PDFViewer>
      {/* <div>
        <TodoApp frutas={frutas}/>
      </div> */}
      {/* <MiComponente/> */}
      {/* <PDFViewer width= "150%" height="490%"><PdfPedidos /></PDFViewer> */}
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
