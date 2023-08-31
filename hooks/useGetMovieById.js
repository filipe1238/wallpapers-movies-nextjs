import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function useGetMovieById(id) {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({});
  
  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  };

  const getMovie = async () => {
    const { data } = await MoviesService.getMovie(id);
    setMovie(data);
    handleSetLoading(false);
  };

  useEffect(() => {
    handleSetLoading(true);
    getMovie();
  }, [id]);

  return movie;
}

export default useGetMovieById;
