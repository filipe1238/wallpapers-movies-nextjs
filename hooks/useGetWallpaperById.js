import React, { useEffect, useState } from "react";
import WallpaperService from "../services/WallpaperService";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function useGetWallpaperById(id) {
  const [wallpaper, setWallpaper] = useState({});
  const dispatch = useDispatch();
  
  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  }

  useEffect(() => {
    handleSetLoading(true);
    WallpaperService.getWallpaper(id)
      .then((wallpaper) => {
        setWallpaper(wallpaper);
      })
      .finally(() => {
        handleSetLoading(false);
      });
  }, [id]);

  return wallpaper;
}

export default useGetWallpaperById;
