import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MovieCardsFromList from './MovieCardsFromList'

function OtherListsTable( list ) {
    //list
    const listObj = list
    const individualList = listObj.props 

    const API_URL = 'https://api.themoviedb.org/3'

    //GET request to get list contents
    const [movies, setMovies] = useState([]);
    const getLists = async () => {
        const res = await fetch(`${API_URL}/list/${individualList.id}?api_key=18c103f8d64a085829984a62f7664c81&language=en-US`)
        const json = await res.json()
        setMovies(json.items);
      }; 

      useEffect(() => {
        getLists();
      }, []);

    return (
        <>
        

        <h2>List name:{"  " + individualList.name}</h2>

        {movies?.length > 0
                ? (
                    <div className='movieComponents'>
                        {movies.map((movie)  => (
                        <MovieCardsFromList movie={movie} key={movie.id}/>
                        ))}
                    </div>
                ) : (
                        <div className='empty'>
                            <h2>No movies</h2>

                        </div>
                )}
        </>
    )
}

export default OtherListsTable
