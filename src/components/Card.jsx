import React from 'react'
import '../styles/index.css'

const Card = ({image, name, population, region, capital}) => {

    return (
       
            <div className="col">
                <div className="card shadow-sm">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p><strong>Population:</strong> {population}</p>
                        <p><strong>Region:</strong> {region}</p>
                        <p><strong>Capital:</strong> {capital}</p>
                    </div>
                </div> 
             </div>
      
    )
}

export default Card