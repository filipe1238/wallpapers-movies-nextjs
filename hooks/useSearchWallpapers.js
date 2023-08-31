import React, { useEffect, useState } from 'react'
import axios from "axios";
import WallpaperService from '../services/WallpaperService';
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function useSearchWallpapers(searchParam) {
  const baseUrl = "https://picsum.photos/v2/list";
  const dispatch = useDispatch();
  const [artigos, setArtigos] = useState([]);

  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  };

  useEffect(() => {
    handleSetLoading(true);
    WallpaperService.getWallpapers(searchParam)
      .then((artigos) => {
        setArtigos(artigos);
      })
      .finally(() => {
        handleSetLoading(false);
      });

  }, [searchParam, baseUrl, setLoading]);

  return artigos;
}

export default useSearchWallpapers