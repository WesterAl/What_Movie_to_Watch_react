import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

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
  
    //Used to load movies from API on page load
    const title = ""
    const fetchData = async () => {
          const res = await fetch(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
          const json = await res.json()
          //console.log(json.original_title)
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
      

    //Add to list
    const [lists, setLists] = useState([]);    
    const getLists = async () => {
        
        console.log("addToList is working")

        //GET json with all created lists
        //Show lists to user
        //Send movieId in POST request

        //Get created lists
        // https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2
          
        //POST movie to databse watchlist
        //const actualData = await fetch('https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2')
        //.then(response => response.json());
        
        //-------------
        try {
            const response = await fetch('https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2');
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setLists(actualData);
            //console.log(actualData.results);
            
          } catch(err) {
            console.log(err)
          } 
        
        //_____________
        
        console.log("addToWatchlist finished")
        
    }

    //console.log("TEST1")
    console.log(lists)
    //console.log("TEST2")

    useEffect(() => {
        getLists();
      }, []);   
    

    
    return (
        <>
        <p>---------MovieDetailsPageContainer---------</p>
        <div className='movie'>
                    <div>
                        <h2>{movie.original_title}</h2>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div>
                        <img className='poster' src={movie.poster_path !== 'undefined' ? `${Poster_URL_constant}${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title}/>
                        
                    </div> 
                    <div className='addToListButtons'>
                        <button onClick={() => addToWatchlist({movieId})}>  
                        Add to Watchlist
                        </button>

                        
                        <div>
                        <select>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="meat">Meat</option>
                        </select>
                        </div>
                    </div>

                    
            </div>
        
        <p>---------MovieDetailsPageContainer---------</p>
        </>
    )
}

export default MovieDetailsPageContainer
