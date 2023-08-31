import React from "react";
import ImageDownloader from "../common/ImageDownloader";
import { Dropdown } from "react-bootstrap";

function ImageDetail({ wallpaper }) {
  // responsive page for image detail
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="p-1">
            <h3>By {wallpaper.author}</h3>
          </div>
          <div className="p-1">
            <Dropdown>
              <Dropdown.Toggle variant="btn btn-outline-secondary">
                Download
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ImageDownloader imageUrl={wallpaper.download_url} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
          <div className="text-center">
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid"
                src={wallpaper.download_url}
                alt={wallpaper.author}
              />
            </div>
            <p>
              {wallpaper.width} x {wallpaper.height}
            </p>
          </div>
        
      </div>
    </div>
  );
}

export default ImageDetail;
