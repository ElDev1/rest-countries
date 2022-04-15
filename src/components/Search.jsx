import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import '../styles/search.css'

const Search = () => {
  return (
    <div className='search-container'>
        <div className='search-input-container'>
            <AiOutlineSearch className='search-icon'/>
            <input type="text" placeholder='search...'></input>
        </div>
        <div className='search-filter-container'>
            <label>
            <input list="regions" name="myBrowser" placeholder="Filter by region"/>
            </label>
            <datalist id="regions">
                <option value="Africa" />
                <option value="America" />
                <option value="Asia" />
                <option value="Europe" />
                <option value="Oceania" />
            </datalist>
        </div>
        
    </div>
  )
}

export default Search