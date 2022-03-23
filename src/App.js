import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.js';


const API_URL= 'http://www.omdbapi.com/?apikey=33756b13';

function App() {

  const [movies,setMovies] = useState([]); 
  const[searchTerm,setsearchTerm]= useState('');


  useEffect(()=>{
    searchmovies('cartoon')
    
  },[])

  const searchmovies = async (title )=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    
  } 

  
  return (
    <div className='app'>
          <h1>MovieLand</h1>

          <div className='search'>
              <input 
              placeholder='Search for Movies' 
              value={searchTerm} 
              onChange={(e)=>{setsearchTerm(e.target.value)}} />

              <img
              src={SearchIcon} 
              alt='Search'
              onClick={()=>{searchmovies(searchTerm)}}
              />
          </div>
        {
          movies?.length > 0  ? (

            <div className='container'>
              {
                movies.map((movie,index)=>{
                  return <MovieCard movie={movie} key={index} />
                })
              }
              
            </div>
          ) : (
            <div className='empty'>
            <h2>No movies found</h2>
            </div>
          )
        }

    </div>
   );
}

export default App;
