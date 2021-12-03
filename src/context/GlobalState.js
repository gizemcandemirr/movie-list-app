import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('wwatched') ? JSON.parse(localStorage.getItem('watched')) : [],
    favouritelist: localStorage.getItem('favouritelist') ? JSON.parse(localStorage.getItem('favouritelist')) : []

}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
    const [state, dispatch]= useReducer(AppReducer,  initialState);
     useEffect(()=> {
         localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
         localStorage.setItem('watched', JSON.stringify(state.watched))
         localStorage.setItem('favouritelist', JSON.stringify(state.favouritelist))
        
     }, [state])   

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }
    const removeMovieFromWatchlist= (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }
    const addMovieToWatched= (movie)=> {
        dispatch({type:"ADD_MOVIE_TO_WATCHED", payload:movie})
    }
    const moveToWatchlist = (movie) => {
        dispatch({type:"MOVE_TO_WATCHLIST", payload:movie})
    }
    const removeFromWatched = (id) => {
        dispatch({type:"REMOVE_FROM_WATCHED", payload:id})
    }

    const addFavouriteMovielist= (movie) => {
        dispatch({type:"ADD_FAVOURITE_MOVIELIST", payload:movie})
    }
    const removeMovieFromFavouritelist= (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_FAVOURITELIST", payload: id});
    }

    return(

        <GlobalContext.Provider value={{watchlist: state.watchlist, 
            watched: state.watched, favouritelist: state.favouritelist,
         addMovieToWatchlist,
         removeMovieFromWatchlist,
         addMovieToWatched,
         moveToWatchlist,
         removeFromWatched,
         addFavouriteMovielist,
         removeMovieFromFavouritelist
         }}>
            {props.children}
        </GlobalContext.Provider>
    )
}