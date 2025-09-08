import {Navbar} from "./Nabvar/Navbar";
import {Footer} from "./Footer/Footer";
import {Outlet} from 'react-router-dom';


export const Layout = ()=>{
    return(
        <div>
            {/* <Navbar/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};