import React from 'react'

function SearchResultsContainer(searchTerm) {

    //const location = searchTerm()
    const { from } = searchTerm.state

    console.log("from the SearchResultsContainer " + from)

    return (
        <>
        <h1>SearchResultsContainer start</h1>
        <h1>SearchResultsContainer end</h1>
        </>
        
    )
}

export default SearchResultsContainer
