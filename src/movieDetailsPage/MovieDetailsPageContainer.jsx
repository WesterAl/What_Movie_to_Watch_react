import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function MovieDetailsPageContainer(  ) {
    
    const location = useLocation();
    const { movieId } = location.state;
    //console.log(movieId);

    //Start URL for getting posters
    const Poster_URL_constant = 'http://image.tmdb.org/t/p/w500/'

    

    //API request to get movie details
    const [movie, setMovie] = useState([]);

    const API_URL = 'https://api.themoviedb.org/3'

    //GET popular movies from API
    
    const GET_search_movies = "https://api.themoviedb.org/3/search/movie?api_key=" //Jack+Reacher"
    const API_KEY = '18c103f8d64a085829984a62f7664c81'
    const queryString = "&query="
  
    //Used to load movie from API on page load
    const title = ""
    const fetchData = async () => {
          const res = await fetch(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
          const json = await res.json()
          //console.log(json)
          setMovie(json);
        };

    useEffect(() => {
        fetchData();
      }, []);  

     //console.log(movie)
    //-------------
    
    //Add to watchlist   
    const addToWatchlist = (movieId) => {
      //function addToWatchlist(movieId){
        console.log("addToWatchlist is running")
        const accountId = 12087692

        const body = {
            "media_type": "movie",
            "media_id": movieId.movieId,
            "watchlist": true
        }     
        //POST movie to databse watchlist
        fetch('https://api.themoviedb.org/3/account/12087692/watchlist?api_key=18c103f8d64a085829984a62f7664c81&session_id=87a00a9299e6268604e49dda491cfa12b29c388c', 
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          })

          console.log("addToWatchlist finished")
        }
      

    


    
    return (
        <>
        <p>---------MovieDetailsPageContainer---------</p>
        <div >
            <div className='movieImage'>
                <div>
                    <img className='poster' src={movie.poster_path !== 'undefined' ? `${Poster_URL_constant}${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title}/>
                </div> 
            </div>
        </div>
        <div className='addToListButtons'>
                    <button onClick={() => addToWatchlist({movieId})}>  
                    Add to Watchlist
                    </button>
                    <Link to="/searchresults/moviedetails/chooselistcontainer" state={ movieId }>
                            <button>Add to list</button> </Link>
                </div>
        
        <p>---------MovieDetailsPageContainer---------</p>
        </>
    )
}

export default MovieDetailsPageContainer
