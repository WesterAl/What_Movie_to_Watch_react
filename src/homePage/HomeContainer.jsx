import React, { useState } from 'react'
import SearchMovie from '../commonComponents/SearchMovie'
import PopularMoviesContainer from './PopularMoviesContainer'
import CreateListForm from '../createListPage/CreateListForm';

function HomeContainer() {



    return (
        <>

        <SearchMovie />

        <PopularMoviesContainer />
        
        </>
    )
}

export default HomeContainer
