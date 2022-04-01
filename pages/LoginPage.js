import { useDispatch, useSelector } from "react-redux"
import { startLoginEmailPassword } from "../actions/auth"
import { useForm } from "../hooks/useForm"
import "../components/css/styleLogin.css"

export const LoginPage = () => {
    const dispatch = useDispatch()
    const {loading, msgError} = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        email : '',
        password : ''
    })

    const {email, password} = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email,password))
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="row g-5">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        alt="login form"
                                        className="card-img"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-login">                                      

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3"></i>
                                               
                                            </div>

                                            <h5 className="login mb-5">Iniciar Sesión</h5>

                                            <div className="form-outline mb-4"> 
                                                <label className="form-label" htmlFor="form2Example17">Correo Electronico </label>
                                                <input onChange={handleInputChange} name="email" placeholder="Ingresa tu Correo Electronico" value={email} type="email" id="form2Example17" className="form-control form-control-lg" />
                                               
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                                                <input onChange={handleInputChange} name="password" placeholder="Ingresa tu Contraseña" value={password} type="password" id="form2Example27"  className="form-control form-control-lg" />
                                                
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button onClick={handleLogin} disabled={loading} className="btn btn-dark btn-lg btn-block" type="button">Iniciar Sesión</button>
                                            </div>
                                            {(msgError) && <p>{msgError}</p>}
                                          
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}