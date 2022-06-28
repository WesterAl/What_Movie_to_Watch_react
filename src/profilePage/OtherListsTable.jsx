import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IndividualMovieCards from 'C:/Users/Albin/Desktop/What_Movie_to_Watch_react/src/homePage/IndividualMovieCards.jsx'
//'E:/Erasmus/WEB/What_Movie_to_Watch_react/src/homePage/IndividualMovieCards.jsx'
import ArrowUp from './arrowup.svg';
import ArrowDown from './arrowdown.svg';
import useCollapse from 'react-collapsed';

function OtherListsTable( list ) {
    //list
    const listObj = list
    const individualList = listObj.props 

    const API_URL = 'https://api.themoviedb.org/3'
    //const used for collapse
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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

        <div className="app">
            <div className="collapsHeader" {...getToggleProps()}>
                <h4>{individualList.name}</h4>
                {isExpanded ? 
                    <img src={ArrowUp}></img> : <img src={ArrowDown}></img>}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {movies?.length > 0
                    ? (
                        <div className='container'>
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
            </div>
        </div>
        
        </>
    )
}

export default OtherListsTable
