import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  Pagination from "./Pagination";
export const Home = () => {

  const [results, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5)
  fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setResult(data.results);
      } else {
        setResult([]);
      }
    });
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie  - moviesPerPage;
    const currentMovies = results.slice(indexOfFirstMovie, indexOfLastMovie);
    const totalPagesNum = Math.ceil(results.length /moviesPerPage)

  return (
    <>
    
      <div className="section">
        <div className="row py-lg-5 home">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>The Most Popular Movies For This Week</h1>
            <p className="lead text-muted">
              Create with TMDB Api. Please, don't forget check every week. So if
              you want you can create watchlist or watchedlist or favouritelist.
              Enjoy!
            </p>
          </div>
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {currentMovies.map((movie) => (
                  <div class="col">
                    <div class="card shadow-sm">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt="poster"
                      />
                      <div class="card-body">
                        <p class="card-text">{movie.overview.substring(0,100) + "..."}</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              <i class="fas fa-info"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              <i class="fas fa-heart"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              <i class="fas fa-plus"></i>{" "}
                            </button>
                          </div>
                          <small class="text-muted">{movie.release_date}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Pagination  pages = {totalPagesNum} 
            setCurrentPage  =   {setCurrentPage}
            currentMovies = {currentMovies} 
           results = {results} />
        </div>
      </div>
    </>
  );
};
