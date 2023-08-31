import React, { useState } from "react";
import { useSelector } from "react-redux";
import MoviesList from "../../components/movies/MoviesList";
import SearchMovies from "../../components/movies/SearchMovies";
import useGetMovies from "../../hooks/useGetMovies";
import useSearchMovieByParams from "../../hooks/useSearchMovieByTitle";
import Loading from "../../components/common/Loading";

function Movies() {
  const [searchParam, setSearchParam] = useState({
    page: 1,
    limit: 20,
    query: "",
    adult: false,
  });
  const loading = useSelector((state) => state.loading.value);
  const movies = useGetMovies(searchParam);
  const searchResults = useSearchMovieByParams(searchParam);

  return (
    <>
      {
        <SearchMovies
          searchParam={searchParam}
          setSearchParam={setSearchParam}
        />
      }
      {loading && <Loading />}
      {!loading &&
        (searchResults.length && searchResults.length > 0 ? (
          <>
            <h5 className="text-center">
              Mostrando resultados de pesquisa para: <b>{searchParam.query}</b>
            </h5>
            <MoviesList movies={searchResults} />
          </>
        ) : (
          <>
            <h5 className="text-center">
              Sem filtros de pesquisa, exibindo mais populares
            </h5>

            <MoviesList movies={movies} />
          </>
        ))}
    </>
  );
}

export default Movies;
