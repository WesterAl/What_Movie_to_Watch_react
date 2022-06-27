import React, { useState } from 'react'
import SearchIcon from './search.svg';
import { Link } from 'react-router-dom'


function SearchMovie() {

    const [searchTerm, setSearchTerm] = useState([]);

   return (
        <>
        <div className="search">
            <label for="input" class="visuallyhidden">Search for a movie</label>
            <input 
            id="input"
            type='text'
            placeholder = 'Search for movies' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            

            <Link to="/searchresults" state={{ searchTerm }}>
                
            <img src={SearchIcon} alt="Search icon"/>
            </Link>
        </div>
        
        </>
    )
}

export default SearchMovie
