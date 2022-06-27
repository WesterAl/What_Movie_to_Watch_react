import React from 'react';
import { Link } from 'react-router-dom'

const IndividualMovieCards = ({ movie: { id, release_date, poster_path, title } }) => {
    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'
    //console.log('Text')
    //console.log(id)
  return (
    <Link to="/searchresults/moviedetails" state={{ movieId: id }}>
        <div className="movie" key={id}>
        <div>
            <p>{release_date}</p>
        </div>

        <div>
            <img src={poster_path !== "N/A" ? `${Poster_URL_constant}${poster_path}` : "https://via.placeholder.com/400"} alt={title} />
        </div>

        <div>
            <h3>{title}</h3>
        </div>
        </div>
    </Link>
  );
}

export default IndividualMovieCards;


