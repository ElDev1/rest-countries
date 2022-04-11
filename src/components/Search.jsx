import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';

const Search = () => {
  return (
    <div>
        <div>
            <input type="text" placeholder='search...'></input>
            <AiOutlineSearch />
        </div>
        <div>
            <label>
            <input list="browsers" name="myBrowser" placeholder="browser"/>
            </label>
            <datalist id="browsers">
                <option value="Chrome" />
                <option value="Firefox" />
                <option value="Internet Explorer" />
                <option value="Opera" />
                <option value="Safari" />
                <option value="Microsoft Edge" />
            </datalist>
        </div>
        
    </div>
  )
}

export default Search