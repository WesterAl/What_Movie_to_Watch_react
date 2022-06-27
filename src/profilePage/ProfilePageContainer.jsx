import React, { useState } from 'react'
import { useEffect } from 'react';
import IndividualMovieCards from 'C:/Users/Albin/Desktop/What_Movie_to_Watch_react/src/homePage/IndividualMovieCards.jsx'
//'E:/Erasmus/WEB/What_Movie_to_Watch_react/src/homePage/IndividualMovieCards.jsx
import OtherListsTable from './OtherListsTable';


const ProfilePageContainer = () => {

    //GET Watchlist
    const [movies, setMovies] = useState([]);
    const GetWatchList = async () => {
        const response = await fetch('https://api.themoviedb.org/3/account/12087692/watchlist/movies?api_key=18c103f8d64a085829984a62f7664c81&language=en&session_id=87a00a9299e6268604e49dda491cfa12b29c388c&sort_by=created_at.asc&page=1') 
        //wait for response
        const data = await response.json();
        //console log results from json
        setMovies(data.results);
        //console.log(data.results);
    }


    //GET created lists
    //Store lists
    const [lists, setLists] = useState([]);    
    //Used to load movies from API on page load
    const getLists = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2`)
        const json = await res.json()
        //console.log(json.results[0])
        //setLists(json.results);
        const li = json.results;
        //console.log(li)
        setLists(li)
      };


        //Used to load the watchlist from API on page load
        useEffect(() => {
            GetWatchList();
            getLists();
        
          }, []);

          //console.log(lists)
          //list had all list objects

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

        <div>
        {lists?.length > 0
                ? (
                    <div className='movieComponents'>
                        {lists.map((list)  => (
                        <OtherListsTable props={list}  key={list.id}/>
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
