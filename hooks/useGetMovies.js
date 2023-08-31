import React, { useEffect, useState } from 'react'
import MoviesService from '../services/MoviesService';
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function useGetMovies(params) {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    
    const handleSetLoading = (newValue) => {
      dispatch(setLoading(newValue));
    };

    const getMovies = async () => {
      
      const {
        data: { results },
      } = await MoviesService.getPopularMovies(params);
      setMovies(results);
      handleSetLoading(false);
    };
  
    useEffect(() => {
      handleSetLoading(true);
      getMovies();
    }, [params]);
    
  return movies;
}

export default useGetMovies