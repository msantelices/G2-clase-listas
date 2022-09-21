import { useState } from 'react'
const Colores = ()=> {
    // Este es mi valor por defecto
    const colores = ['red', 'green', 'blue', 'black']

    // Defino un estado (elementos) que se incia con mi valor por defecto
    const [elementos, setElementos] = useState(colores)

    const eliminar = (index)=> {
        const elementosActuales = [...elementos]
        elementosActuales.splice(index, 1)

        setElementos(elementosActuales)
    }

    return (
        <div>
            {
                // Cuando cambia el array de la linea 7, se actualiza este listado de HTML
                elementos.map((elemento, index)=> {
                    return (
                        <div 
                            key={elemento}
                            className="item-colores" 
                            style={{backgroundColor: elemento}} 
                            onClick={()=> eliminar(index)}>
                            {elemento}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Colores