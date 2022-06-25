import React from 'react'
import { useLocation } from 'react-router-dom';

function MovieDetailsPageContainer( movie ) {
    
    //const location = useLocation();
    //const movie = location.state;

    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'


    //const location = useLocation();
    //const movie = location.state;
    //console.log(test)
    console.log("test före")
    console.log(typeof movie)
    console.log("test efter")
    

    return (
        <>
        <p>---------MovieDetailsPageContainer---------</p>
        <div className='movie'>
                    <div>
                        <p>Movie release date {movie.release_date}</p>
                    </div>
                    <div>
                        <img className='poster' src={movie.poster_path !== 'undefined' ? `${Poster_URL_constant}${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title}/>
                        
                    </div> 
                    <div>
                        <h3>{movie.original_title}</h3>
                    </div>
            </div>
        <p>---------MovieDetailsPageContainer---------</p>
        </>
    )
}

export default MovieDetailsPageContainer
