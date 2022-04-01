import { useSelector } from 'react-redux'
import { db } from "../firebase/firebaseConfig"
import './css/ventilador.css'

export const Sensor = ({habitacion, estado}) => {
    const {uid} = useSelector(state => state.auth);
    const onChange = (ev) => {
        console.log(ev.target.checked);

        db.doc(`/${uid}/${habitacion}`)
        .update({
            Sensor:ev.target.checked
        })
    }
    return (
        <div className="padding">
            <div className="switch demo3"> <input onChange={onChange} checked= {estado} type="checkbox" /> <label><i></i></label> </div>
        </div>
        
    )
}