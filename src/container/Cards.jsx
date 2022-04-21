import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })

        console.log(data);
    },[])  

    const searchCountries = (searchValue) => {
      setSearchInput(searchValue);

      if(searchInput) {
        const filteredCountries = data.filter((country) => 
          Object.values(country).join("").toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        setFiltered(filteredCountries);
      } else {
        setFiltered(data);
      }
    }

  return (
    <>
      <Search searchCountries={searchCountries} searchInput={searchInput} setData={setData}/>
      <div className='d-flex justify-content-center'>
        {loading ? "loading" : ""}
        {searchInput.length > 0 ? (
          <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" >
             {filtered.map((elem) => {
                 return <Card key={elem.name.common} image={elem.flags.png} name={elem.name.common} population={elem.population} region={elem.region} capital={elem.capital} ></Card>
             })}
          </div>
        ) : (
          <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" >
            {data.map((elem) => {
                return <Card key={elem.name.common} image={elem.flags.png} name={elem.name.common} population={elem.population} region={elem.region} capital={elem.capital} ></Card>
            })}
          </div>
        )}
      </div>
    </>    
  )
}

export default Cards