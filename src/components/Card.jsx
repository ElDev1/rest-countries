import React from 'react'
import '../styles/index.css'

const Card = ({image, name, population, region, capital}) => {

    return (
       
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p><strong>Population:</strong> {population}</p>
                        <p><strong>Region:</strong> {region}</p>
                        <p><strong>Capital:</strong> {capital}</p>
                    </div>
                </div> 
             </div>
      
    )
}

export default Card