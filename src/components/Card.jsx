const Card = ({producto})=> {
    return (
        <div className="card">
            <h3>{ producto.nombre }</h3>
        </div>
    )
}

export default Card