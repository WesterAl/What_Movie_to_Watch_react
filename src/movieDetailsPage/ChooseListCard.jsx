import React from 'react'

function ChooseListCard( props ) {
    
    const list = props.props.list
    const movieId = props.props.movieId
    //console.log(list)
    
    //const lisbObj = list
    //const individualList = lisbObj.list
    

    //console.log(list.list)
    
    //console.log()

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
          }

    return (
        <>
            
        <div className='listCard' onClick={addToList}>
            
            
                    <div>
                        <h2>List name: </h2>
                        <h2>{list.name}</h2>
                        <h3>Description</h3>
                        <h3>{list.description}</h3>
                        <p>Movies in list: {list.item_count}</p>
                    </div>
            
                        
                </div>
                    
        </>
    )
}

export default ChooseListCard
