 
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Artigos from "../../components/wallpaper/Artigos";
import FooterNextPage from "../../components/menu/FooterNextPage";
import Loading from "../../components/common/Loading";
import NavigateButtonsParams from "../../components/common/NavigateButtonsParams";
import useSearchWallpapers from "../../hooks/useSearchWallpapers";


function Wallpapers() {
  const loading = useSelector((state) => state.loading.value);
  const [searchParam, setSearchParam] = useState({ page: 1, limit: 20 });
  const wallpapers = useSearchWallpapers(searchParam);

  return (
    <>
      <NavigateButtonsParams searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="container-fluid">
        {loading && <Loading />}
        {!loading && <Artigos artigos={wallpapers} />}
      </div>
      <FooterNextPage searchParam={searchParam} setSearchParam={setSearchParam} />
    </>
  );
}

export default Wallpapers;