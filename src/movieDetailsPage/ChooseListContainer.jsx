import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ChooseListCard from './ChooseListCard';
import Popup from 'reactjs-popup';

function ChooseListContainer(  ) {
    
    const location = useLocation();
    const movieId = location.state
        
    //Store lists
    const [lists, setLists] = useState([]);    


        //GET json with all created lists
        //Show lists to user
        //Send movieId in POST request

        //POST movie to databse watchlist
        //const actualData = await fetch('https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2')
        //.then(response => response.json());

        
    //Used to load movies from API on page load
    const getLists = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/account/12087692/lists?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2`)
        const json = await res.json()
        const li = json.results;
        setLists(li)
      };

  useEffect(() => {
    getLists();
    }, []);  


    return (
        <>
        <div className='chooseList'>
            <p>Choose which list you want to add movie to:</p>
            {lists?.length > 0
                    ? (
                        <div className='container'>
                            {lists.map((list)  => (
                                <ChooseListCard props={{list, movieId}}  key={list.id} />
                                
                            ))}
                        </div>
                    ) : (
                            <div className='empty'>
                                <h2>No lists</h2>

                            </div>
                    )}
        </div>
        
        </>
    )
}

export default ChooseListContainer
