import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/loading/loading";

function ImageDownloader({ imageUrl }) {
  const imageMimeType = "image/jpeg";
  const imageExtension = ".jpg";
  const dispatch = useDispatch();
  
  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  }

  const downloadImage = () => {
    handleSetLoading(true);
    axios
      .get(imageUrl, {
        responseType: "blob",
      })
      .then((response) => {
        saveAs(
          new Blob([response.data], { type: imageMimeType }),
          "wallpaper-downloaded" + imageExtension
        );
        handleSetLoading(false);
      });
  };

  const viewImage = () => {
    window.open(imageUrl);
  }

  return (
    <div>
      <Dropdown.Item onClick={downloadImage}>
        <FontAwesomeIcon icon={faDownload} /> Download
      </Dropdown.Item>
      <Dropdown.Item onClick={viewImage}>
        <FontAwesomeIcon icon={faSearch} /> View
      </Dropdown.Item>
    </div>
  );
}

export default ImageDownloader;
