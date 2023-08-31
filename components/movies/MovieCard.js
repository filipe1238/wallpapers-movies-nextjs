import React from 'react'

function MovieCard({id, title, release_date, poster_path, overview, vote_average}) {
  return (
    <div className="card">
      <a className="download-url" target="blank" href={`/movies/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt={title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
        <p className="card-text"><small className="text-muted">Data de lançamento: {release_date}</small></p>
        <p className="card-text"><small className="text-muted">Nota: {vote_average}</small></p>
      </div>
    </div>
  )
}

export default MovieCard