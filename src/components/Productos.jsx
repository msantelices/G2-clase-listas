import { useState, useRef } from 'react'
import Card from './Card.jsx'

const Productos = () => {
    const productosInicial = [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" },
        { id: 4, nombre: "Producto 4" }
    ]

    const inputRef = useRef(null) // -> document.getElementById('...')
    const buttonRef = useRef(null)

    const [productos, setProductos] = useState(productosInicial)
    // const [inputValue, setInputValue] = useState("")

    const agregarProducto = (e)=> {
        e.preventDefault()

        // const nuevoProducto = {
        //     id: productos.length + 1,
        //     nombre: inputValue
        // }
        const nuevoProducto = {
            id: productos.length + 1,
            nombre: inputRef.current.value
        }

        const productosActualizados = [...productos, nuevoProducto]
        setProductos(productosActualizados)

        inputRef.current.value = ""
    }

    const eliminarProducto = ()=> {
        // Copiar valor actual
        const productosActuales = [...productos]

        // Modificar copia
        productosActuales.pop()

        // Actualzar con copia modificada
        setProductos(productosActuales)
    }

    return (
        <div>
            <form onSubmit={(e)=> agregarProducto(e)}>
                {/* <input ref={inputRef} type="text" placeholder='Nuevo producto' onChange={(e)=> setInputValue(e.target.value)} /> */}
                <input ref={inputRef} type="text" placeholder='Nuevo producto' />
                <button ref={buttonRef}>Agregar</button>
            </form>

            <div>
                <button onClick={()=> eliminarProducto()}>Eliminar último producto</button>
            </div>

            <div className='galeria'>
                {
                    productos.map((producto) => {
                        return (
                            <Card key={producto.id} producto={producto}></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Productos