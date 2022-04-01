import { useDispatch, useSelector } from "react-redux"
import "../images/logo.png"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElementos"
import { startLogout } from "../actions/auth"
import "./css/navbar.css"

export const Navbar = () => {
    const {email} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout())
    }


    return (
        <>
        <Nav>
            <NavLink to='/'>
            <img src={require('../images/logo.png')}
             alt='Logo' width='60px' height='60px' to='/Inicio'/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}  to='/Dispositivos' activeStyle>
                    Dispositivos
                </NavLink>
                <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to='/Sensores' activeStyle>
                    Componentes Usados
                </NavLink>
                <div className="text-left">
                    <span>{email}</span>
                    
                </div> 
                <NavBtnLink onClick={handleLogout} to='/LoginPage'>Cerrar Sesion</NavBtnLink>
        
            </NavMenu>
            
        </Nav>
      </>
    );
};
export default Navbar;