import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { MovieCard } from './MovieCard';


export const Favouritelist = () => {

    const { favouritelist }= useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading"> My Watchlist </h1>              
                 </div>  
                  
                  
                   { favouritelist.length > 0 ? (
                   <div className="movie-grid">
                      {
                      favouritelist.map((movie) => ( <MovieCard movie={movie} type="favouritelist" />
                        
                        ))}
                  </div>

                   ): (
                       <h2 className="no-movies"> No movies in your list, add some please! </h2>
                   )

                   }
                 


            </div>
            
        </div>
    )
}
