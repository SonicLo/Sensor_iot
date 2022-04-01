import { Divider } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Temperature } from "../components/Temperature"
import { Sensor } from "../components/Sensor.js"
import { db } from "../firebase/firebaseConfig"
import "../components/css/styleContactanos.css"
export const HomePage = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const { uid } = useSelector(state => state.auth);

    const getHabitaciones = async(uid) => {
        const habitaciones = await db.collection(uid).get()
        let datos = [];
        habitaciones.forEach(item =>{
            datos.push({
                key: item.id,
                value: item.data()
            })
        })
        return datos;
    }
    let datos = [];
    useEffect(async() => {
        datos = await getHabitaciones(uid)
        setHabitaciones(datos)

    }, [datos]);

    return (
        <>
            {
                habitaciones.map((habitacion) => (
                    <div className="row fondo" key={habitacion.key}>
                        <div className="col-md-6">
                     
                            <Temperature room={habitacion.value.Nombre} value={habitacion.value.Distancia} />
                            
                        </div>
                                       
                        <div className="col-md-6">
                            <Sensor habitacion = {habitacion.key} estado={habitacion.value.Sensor ? "checked" : ""} />
                        </div>
         
                       
                    </div>
                ))
            }

        </>
    )
}