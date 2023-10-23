function Pokemon({ image, name }) {  
    return (
        <div className="col-3">
            <div className="card">
                <img 
                    src={image} 
                    alt={name}
                    className="card-img-top" 
                />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
