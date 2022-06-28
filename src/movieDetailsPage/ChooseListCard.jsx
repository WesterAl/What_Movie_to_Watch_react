import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../commonComponents/NotificationContainer'

function ChooseListCard( props ) {
    
    const list = props.props.list
    const movieId = props.props.movieId

    //POST movie to list
    const addToList = () => {
        //function addToWatchlist(movieId){
          console.log("addToList is running")
          const accountId = 12087692

  
          const body = {
            "media_id": movieId
          }     
          //POST movie to databse watchlist
          //`${API_URL}${GET_Popular_Movies}`
          // 'https://api.themoviedb.org/3/list/${list.id}/add_item?api_key=18c103f8d64a085829984a62f7664c81&session_id=87a00a9299e6268604e49dda491cfa12b29c388c'
          fetch(`https://api.themoviedb.org/3/list/${list.id}/add_item?api_key=18c103f8d64a085829984a62f7664c81&session_id=87a00a9299e6268604e49dda491cfa12b29c388c`, 
          {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body)
            })
  
            console.log("addToList finished")
            notify('The movie is added')
          }

    return (
        <> 
        <div className='container' onClick={addToList}>
          <div className='collapsHeader'>
              <h2>{list.name}</h2>
          </div>
          <ToastContainer />
        </div>           
        </>
    )
}

export default ChooseListCard
