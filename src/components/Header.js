import React from 'react'
import {Link} from 'react-router-dom'
export const Header = () => {
    return (
        <header>
           <div className='container'>
               <div className='inner-content'>
                 <div className='brand'>
                     <Link to="/">Movie App</Link>
                 </div>

                  <ul className='nav-links'>
                     <li>
                         <Link to="/">Home </Link>
                     </li>
                     <li>
                         <Link to="/watchlist">Watchlist</Link>
                     </li>
                     <li>
                         <Link to="/watched">Watched </Link>
                     </li>
                     <li>
                         <Link to="/watchlist">Favourite</Link>
                     </li>
                     <li>
                         <Link to="/add" className="btn">Search..</Link>
                     </li>
                  </ul>

               </div>
           </div>

        </header>
    )
}
