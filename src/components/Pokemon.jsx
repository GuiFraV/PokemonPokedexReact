function Pokemon({ image, name, counter }) {  
    return (
        <div>
            <div className="card" style={{width: "100%" }}>
                <img 
                    src={image} 
                    alt={name}
                    className="card-img-top" 
                />
                <div className="card-body">
                    <h3 className="card-title text-center">{counter}# {name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
