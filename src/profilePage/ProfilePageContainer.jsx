import React, { useState } from 'react'
import { useEffect } from 'react';
import IndividualMovieCards from 'E:/Erasmus/WEB/What_Movie_to_Watch_react/src/homePage/IndividualMovieCards.jsx';

const ProfilePageContainer = () => {
    const [movies, setMovies] = useState([]);

    const GetWatchList = async () => {
        const response = await fetch('https://api.themoviedb.org/3/account/12087692/watchlist/movies?api_key=18c103f8d64a085829984a62f7664c81&language=en&session_id=87a00a9299e6268604e49dda491cfa12b29c388c&sort_by=created_at.asc&page=1') 
        //wait for response
        const data = await response.json();
        //console log results from json
        setMovies(data.results);
        //console.log(data.results);
    }

        //Used to load the watchlist from API on page load
        useEffect(() => {
            GetWatchList();
        
          }, []);

    return (

        <>
        <div className='PopularMoviesContainer'>
        <h2>Watchlist</h2>

        {movies?.length > 0
                ? (
                    <div className='movieComponents'>
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

export default ProfilePageContainer
