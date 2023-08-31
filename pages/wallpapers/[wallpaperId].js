import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import ImageDetail from "../../components/wallpaper/ImageDetail";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useGetWallpaperById from "../../hooks/useGetWallpaperById";

function SingleWallpaper() {
  const loading = useSelector((state) => state.loading.value);
  const router = useRouter();
  const { wallpaperId } = router.query;
  const wallpaper = useGetWallpaperById(wallpaperId);

  return (
    <>
      {loading && <Loading />}
      {!loading && <ImageDetail wallpaper={wallpaper} />}
    </>
  );
}

export default SingleWallpaper;
