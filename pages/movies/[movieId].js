import React, { useEffect, useState } from "react";
import MoviesService from "../../services/MoviesService";
import { MovieDetail } from "../../components/movies/MovieDetail";
import Loading from "../../components/common/Loading";
import useGetMovieById from "../../hooks/useGetMovieById";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function SingleMovie() {
  const isLoading = useSelector((state) => state.loading.value);

  const router = useRouter();
  const { movieId } = router.query;
  const movie = useGetMovieById(movieId);
  
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <MovieDetail {...movie} />}
    </>
  );
}

export default SingleMovie;
