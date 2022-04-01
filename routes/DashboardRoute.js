import { Navbar } from "../components/Navbar"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { AccountPage } from "../pages/AccountPage"
import { InicioPage } from "../pages/InicioPage"

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="Dispositivos" element={<HomePage />}/>
                <Route path="Sensores" element={<AboutPage />}/>
                <Route path="Cuenta" element={<AccountPage/>}/>
                <Route path="Inicio" element={<InicioPage/>}/>

            </Routes>
        </>
    )
}