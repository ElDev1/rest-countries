import React from 'react'

const Card = ({image, name, population, region, capital}) => {

    return (
        <div>
            <img src={image} alt="country flag" />
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    )
}

export default Card