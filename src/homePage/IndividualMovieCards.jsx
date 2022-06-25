import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function IndividualMovieCards({ movie }) {

    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'

    //const onClick = () => console.log('hi');
    
    //console.log(typeof movie)
      
    

    return (
        <>
        <Link to="/searchresults/moviedetails" >
           
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
        </Link>
        
        </>
    )
}

export default IndividualMovieCards


