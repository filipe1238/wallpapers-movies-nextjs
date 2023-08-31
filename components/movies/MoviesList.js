import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {movies.map((artigo, index) => (
          <div className="col-sm-8 col-md-3" key={artigo.id}>
            <MovieCard {...artigo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
