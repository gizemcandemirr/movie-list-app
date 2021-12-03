import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
export const MovieControl = ({movie,type}) => {
     
    const {addMovieToWatchlist,removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched,addFavouriteMovielist,removeMovieFromFavouritelist} = useContext (GlobalContext);
     
    return (
        <div className='inner-card-controls'>
            {
                type === 'watchlist' && (

                    <>
                    <button className="ctrl-btn"
                     onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                         </button>


                         <button className="ctrl-btn"
                     onClick={() => addFavouriteMovielist(movie)}>
                       <i class="fas fa-heart"></i>
                         </button>

                         
                         <button className="ctrl-btn"
                         onClick={ () => removeMovieFromWatchlist(movie.id)}
                         >
                        <i className="fa-fw fa fa-times"></i>
                         </button>
                    </>
                )
            }


            {type=== 'watched' && (
                <>
                <button className="ctrl-btn" onClick={ () => moveToWatchlist(movie)}>
                    <i className="fa-fw far fa-eye-slash">

                    </i>
                </button>

                <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
                    <i className="fa-fw fa fa-times">

                    </i>
                </button>
                
                </>
            )}


                 {type=== 'favouritelist' && (
                <>
                <button className="ctrl-btn" onClick={ () => moveToWatchlist(movie)}>
                    <i className="fas fa-plus">

                    </i>
                </button>

                <button className="ctrl-btn" onClick={() => removeMovieFromFavouritelist(movie.id)}>
                    <i className="fa-fw fa fa-times">

                    </i>
                </button>
                
                </>
            )}


        </div>
    )
}
