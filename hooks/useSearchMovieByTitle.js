import React, { useEffect } from "react";
import MoviesService from "../services/MoviesService";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function useSearchMovieByParams(params) {
  const [searchResults, setSearchResults] = React.useState([]);
  
  const dispatch = useDispatch();
  
  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  }

  useEffect(() => {
    handleSetLoading(true);
    if (params) {
      MoviesService.searchMoviesByQueryParams(params)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .finally(() => {
          handleSetLoading(false);
        });
    }
  }, [params]);

  return searchResults;
}

export default useSearchMovieByParams;
