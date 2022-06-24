import React from 'react'

function IndividualMovieCards({ movie }) {

    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'


    return (
        <>
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
        </>
    )
}

export default IndividualMovieCards
