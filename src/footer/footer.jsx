import React from 'react'

function Footer() {

    //-_-_-_-_-_This part should be moved to CreateList page_-_-_-_--_-_-_-_-_-_-_-_-
    const createList = (movieId) => {
        //function addToWatchlist(movieId){
          console.log("createList is running")
        const language = "en"        
          const body = {
                //"name": nameOfList,
                //"description": description,
                "language": language
          }     
          //POST movie to databse watchlist
          // https://api.themoviedb.org/3/list?api_key=<<api_key>>
          fetch('https://api.themoviedb.org/3/list?api_key=18c103f8d64a085829984a62f7664c81', 
          {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body)
            })
  
            console.log("createList finished")
          }
          //-_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_-


    return (
        <>
        <p>Footer placeholder. Thank you for visiting</p>
        {/*-_-_-_-_-_-_-_-_--_-_-_This part should be moved to CreateList page-_-_-_-_-_--_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_- */}
        <div className='addToListButtons'>
            {/*Here should be a form to collect name and description of list*/}
                        <button onClick={() => createList()}>  
                        Add to Watchlist
                        </button>                        
                    </div>
        {/*-_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_--_-_-_-_-_-_-_-_- */}
        
        </>
        
    )
}

export default Footer