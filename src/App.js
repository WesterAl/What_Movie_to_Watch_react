import './App.css';
//Import header componets
import Navigationbar from './header/Navigationbar';
import Pagetitle from './header/Pagetitle';
import Searchmovie from './commonComponents/SearchMovie'
import IndividualMovieCards from './homePage/IndividualMovieCards';
import HomeContainer from './homePage/HomeContainer';
import LoginForm from './loginPage/LoginForm';
import MovieDetailsPageContainer from './movieDetailsPage/MovieDetailsPageContainer';
import ProfilePageContainer from './profilePage/ProfilePageContainer'
import RegistrationForm from './registrationPage/RegistrationForm'
import Footer from './footer/Footer';
import CreateListForm from './createListPage/CreateListForm';
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResultsContainer from './searchResultPage/SearchResultsContainer';
import { useEffect } from 'react';
import ChooseListContainer from './movieDetailsPage/ChooseListContainer';



//API Key (v3 auth): 18c103f8d64a085829984a62f7664c81
//API key
const API_KEY = '18c103f8d64a085829984a62f7664c81'
const API_URL = 'https://api.themoviedb.org/3'

//Query for a movie
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher'
const query = '/search/movie?api_key=18c103f8d64a085829984a62f7664c81&query='

//GET popular movies for today
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const GET_Popular_Movies = '/movie/popular?api_key=18c103f8d64a085829984a62f7664c81&language=en-US&page=1'





function App() {
  

  return (
    <BrowserRouter>
      <header>
      <Pagetitle />
      <Navigationbar />
      </header>
      <Routes>
        <Route path='/' element={<HomeContainer />}  />
        <Route path='/login' element={<LoginForm /> } />
        <Route path='/profilepage' element={<ProfilePageContainer />} />
        <Route path='/registration' element={<RegistrationForm />} />     
        <Route path='/searchresults' element={<SearchResultsContainer />} />     
        <Route path='/createlist' element={<CreateListForm />} />     
        <Route path='/searchresults/moviedetails' element={<MovieDetailsPageContainer />} />
        <Route path='/searchresults/moviedetails/chooselistcontainer' element={<ChooseListContainer />} />     
      </Routes>
      

    
    </BrowserRouter>
    
  );
}

export default App;
