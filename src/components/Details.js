import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Details() {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0eab07c6105c03164ace717da637b3ea&language=en-US`
        );
        setResult(res.data);
        setLoading(false);
      } catch {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
   
      <div className="container mt-4">
             <div class="row mb-2" key={result.id}>
        <div class="col-md-12">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block">
          <img
            src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
            alt="poster"
          />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">{result.riginal_language}</strong>
              <h3 className="mb-0"> {result.title} </h3>
              <div class="mb-1 text-muted">{result.release_date}</div>
              <p class="card-text mb-auto">
                {result.overview}
              </p>
            
            </div>
        
          </div>
        </div>
       
      </div>
      </div>
   
    </>
  );
}

export default Details;
