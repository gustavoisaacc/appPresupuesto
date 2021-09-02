import React, { Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //Funcion que lee el presto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value), 10)
    }

    //validar campos
    const agregarPresupuetso = e =>{
        e.preventDefault()
        if(cantidad < 10 || isNaN(cantidad)){
            guardarError(true)
            return
        }

        //paso la validaicion 
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error msg="El Presupuesto no es valido"/> : null}
            <form
                onSubmit={agregarPresupuetso}
            >
                <input 
                    type="number"
                    className="u-full-width" 
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
     );
}
 
export default Pregunta;