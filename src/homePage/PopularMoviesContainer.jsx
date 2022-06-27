import React, { useState } from 'react'
import { useEffect } from 'react';

import IndividualMovieCards from './IndividualMovieCards';


function PopularMoviesContainer() {

    const [movies, setMovies] = useState([]);


    const API_KEY = '18c103f8d64a085829984a62f7664c81'
    const API_URL = 'https://api.themoviedb.org/3'

    //GET popular movies for today
    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    const GET_Popular_Movies = '/movie/popular?api_key=18c103f8d64a085829984a62f7664c81&language=en-US&page=1'

    //Start URL for getting posters
    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'

    //GET popular movies from API
    const searchMovies = async () => {
        //fetch data
        const response = await fetch(`${API_URL}${GET_Popular_Movies}`)
        //wait for response
        const data = await response.json();
        //console log results from json
        setMovies(data.results);
        //console.log(data.results);
      }
  
    //Used to load popular movies from API on page load
    useEffect(() => {
      searchMovies();
  
    }, []);

    //console.log(movies[0])

    
    return (
        <>
        <div className='PopularMoviesContainer'>
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
        
        </div>
        </>

    )
}

export default PopularMoviesContainer
