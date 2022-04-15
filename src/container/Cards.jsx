import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setData(data))

        console.log(data);
    },[])  

    
  return (
    <div className='d-flex justify-content-center'>
      <div className="container-fluid row row-cols-1 row-cols-md-4 g-4" >
        {data.map((elem) => {
            return <Card key={elem.name.common} image={elem.flags.png} name={elem.name.common} population={elem.population} region={elem.region} capital={elem.capital} ></Card>
        })}
      </div>
    </div>
    
  )
}

export default Cards