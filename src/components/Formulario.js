import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //agregar gastos
    const agregarGastos = e => {
        e.preventDefault()

        //validar 
        if(cantidad < 10 || isNaN(cantidad) || nombre.trim()  === ''){
            guardarError(true)
            return
        }

        guardarError(false)

        //constuir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //agregar castos al component principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //resetear form
        guardarNombre('')
        guardarCantidad(0)
        
    }
    return ( 
        <form
            onSubmit={agregarGastos}
        >
            <h2>Agrega tus gastos</h2>
            {error ? <Error msg="Ambos campos son obligatorios"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    placeholder="Ej. 300"
                    className="u-full-width"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type="submit" 
                value="agregar gasto" 
                className="button-primary u-full-width"
            />
        </form>
     );
}
 
export default Formulario;