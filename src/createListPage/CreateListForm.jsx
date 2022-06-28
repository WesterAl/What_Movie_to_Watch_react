import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import notify from '../commonComponents/NotificationContainer'

function CreateListForm() {
    const[listName, setListName]=useState([])
    const[description, setDescription]=useState([])

    //-----This part should be moved to CreateList page------------_-
const createList = (listName, description) => {
    //function addToWatchlist(movieId){
        console.log(listName)
        console.log(description)
        const language = "en"        
        const body = {
            "name": listName,
            "description": description,
            "language": language
        }     
        //POST movie to databse watchlist
        // https://api.themoviedb.org/3/list?api_key=<<api_key>>
        if(listName != '' && description != ''){
            fetch('https://api.themoviedb.org/3/list?api_key=18c103f8d64a085829984a62f7664c81&session_id=239f82b6d7a2477944763397767e5e6aa6f886b2', 
            {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
    
            console.log("createList finished")
            notify('The list is added')
        } else {
            alert("You have to put the name and the description first!")
        }
        }
        //------------------------------------
    return (
        <>
        <div className='app'>
            <div className='listName'>
                <input 
                placeholder='Name of the list'
                value={listName}
                onChange={(e) => setListName(e.target.value)} 
                />
            </div>
            <div className='listName'>
                <textarea 
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div>
                <button className='button' onClick={() => createList(listName, description)
                    }>
                       <span>Create</span> 
                </button> 
            </div>
            <ToastContainer/>
        </div>
        
        </>
    )

    
}


export default CreateListForm