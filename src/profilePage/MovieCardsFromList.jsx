import React from 'react'

function MovieCardsFromList( movie ) {
    const movieObj = movie
    const individualMovie = movieObj.movie

    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'
    console.log('From MovieCardsFromList')
    console.log(individualMovie.poster_path)


    return (
        <>
        <div className="movie" key={individualMovie.id}>
            <div>
                <p>{individualMovie.release_date}</p>
            </div>
                
            <div>
                <img src={individualMovie.poster_path !== "N/A" ? `${Poster_URL_constant}${individualMovie.poster_path}` : "https://via.placeholder.com/400"} alt={individualMovie.original_title} />
            </div>

            <div>
                <h3>{individualMovie.original_title}</h3>
            </div>
        </div>
        </>
    )
}

export default MovieCardsFromList
