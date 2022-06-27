import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ChooseListCard from './ChooseListCard';

function ChooseListContainer(  ) {
    
    const location = useLocation();
    const movieId = location.state
    //console.log("chooselistcontainer")
    //console.log(movieId)
  
    //const { from } = location.state;
  //console.log(typeof from);

        
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
        //console.log(json.results[0])
        //setLists(json.results);
        const li = json.results;
        //console.log(li)
        setLists(li)
      };

  useEffect(() => {
    getLists();
    }, []);  

    
    //console.log("TEST1")
    //console.log(lists)
    //console.log("TEST2")
    
       
    

    return (
        <>
        <h2>Choose which list you want to add movie to:</h2>
        {lists?.length > 0
                ? (
                    <div className='movieComponents'>
                        {lists.map((list)  => (
                            <ChooseListCard props={{list, movieId}}  key={list.id} />
                            
                        ))}
                    </div>
                ) : (
                        <div className='empty'>
                            <h2>No lists</h2>

                        </div>
                )}
        </>
    )
}

export default ChooseListContainer
