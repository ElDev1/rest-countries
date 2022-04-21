import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import '../styles/search.css'
import {useState} from 'react';


const Search = ({searchCountries, searchInput, setData}) => {
  

  return (
    <div className='container-fluid d-flex justify-content-around mb-5 mt-5'>
        <div>
            <AiOutlineSearch className='search-icon'/>
            <input type="text" onChange={(e) => searchCountries(e.target.value)} value={searchInput} id='search' placeholder='search...'></input>
        </div>
        <div class="input" placeholder='Filter'>
          <select class="form-select" id="inputGroupSelect01">
            <option value="Filter by region">Filter by region</option>
            <option value="America">America</option>
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