import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import '../styles/search.css'
import {useEffect} from 'react';


const Search = ({searchCountries, searchInput, setData}) => {
  
  const region = [
    {
      name:"Global"
    },
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ]

  const fetchCountryByRegion = async (region) => {
    if(region !== "Global" && region !== undefined) {
      console.log(region, "hola")
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      )
      const data = await res.json()
        setData(data)
        console.log(data)
      } else {
        const res = await fetch(
          `https://restcountries.com/v3.1/all`
        )
        const data = await res.json()
          setData(data)
      }
  }

  useEffect(() => {
    fetchCountryByRegion()
  }, [])


  return (
    <div className='container-fluid d-flex justify-content-around mb-5 mt-5'>
        <div>
            <AiOutlineSearch className='search-icon'/>
            <input type="text" onChange={(e) => searchCountries(e.target.value)} value={searchInput} id='search' placeholder='search...'></input>
        </div>
        <div className="input" placeholder='Filter'>
          <select className="form-select" id="select" name="select" value={region.name} onChange={(e) => fetchCountryByRegion(e.target.value)}>
            <option value="Global">Global</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
         </div>
        
    </div>
  )
}

export default Search