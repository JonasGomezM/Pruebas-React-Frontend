interface ServiciosProps {
    dropOpen: boolean
}

export const Servicios = ({dropOpen}: ServiciosProps) => {
    return (
         <ul className={`drop-menu ${dropOpen ? "open" : ""}`}>
              <li>
                <a href="#">Cursos</a>
              </li>
              <li>
                <a href="#">Asesorías</a>
              </li>
              <li>
                <a href="#">Certificaciones</a>
              </li>
        </ul>
    )
};