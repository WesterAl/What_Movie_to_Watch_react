import React, { useState } from 'react'
import SearchIcon from './search.svg';
import { Link } from 'react-router-dom'


function SearchMovie() {

    const [searchTerm, setSearchTerm] = useState([]);

   return (
        <>

        <input 
        type='text'
        placeholder = 'Search for movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Link to="/searchresults" state={{ searchTerm }}>
            
        <img src={SearchIcon} />
        </Link>
        


        </>
    )
}

export default SearchMovie
