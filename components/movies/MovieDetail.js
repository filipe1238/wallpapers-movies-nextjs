import React from 'react'

export const MovieDetail = ({title, status, tagline, overview, vote_average, poster_path, release_date, home_page}) => {
  /* cool bootrap page foe the movie details */
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          <p>{tagline}</p>
          <p>{overview}</p>
          <p>Status {status}</p>
          <p>Score {vote_average}</p>
          <p>Date of Release {release_date}</p>
          <p>{home_page}</p>
        </div>
      </div>
    </div>
  )
}
