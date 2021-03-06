import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchMovie from '../commonComponents/SearchMovie';
import IndividualMovieCards from '../homePage/IndividualMovieCards';


function SearchResultsContainer(props) {
    

    const location = useLocation();
    const searchTerm = location.state;

    const [movies, setMovies] = useState([]);

    const API_URL = 'https://api.themoviedb.org/3'

    //GET popular movies from API
    const GET_search_movies = "https://api.themoviedb.org/3/search/movie?api_key=" 
    const API_KEY = '18c103f8d64a085829984a62f7664c81'
    const queryString = "&query="
  
    //Used to load movies from API on page load
    const fetchData = async () => {
          const res = await fetch(`${GET_search_movies}${API_KEY}${queryString}${searchTerm.searchTerm}`)
          const json = await res.json()
          //console.log(json)
          setMovies(json.results);
        };

    useEffect(() => {
        fetchData();
      }, []);    

    return (
        <>
        <SearchMovie />
        {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie)  => (
                            <IndividualMovieCards movie={movie} key={movie.id} />
                            
                        ))}
                    </div>
                ) : (
                        <div className='empty'>
                            <h2>No movies</h2>

                        </div>
                )}
        </>
        
    )
}

export default SearchResultsContainer
