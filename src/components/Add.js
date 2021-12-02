import React, { useState } from "react";
import {ResultCard} from "./ResultCard"


export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([]);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search for a movie"
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}> 
                   <ResultCard movie={movie} />
                 
                </li>
              ))}
            </ul>
          )}

         
        </div>
                   
        

      </div>
    </div>
  );
};
