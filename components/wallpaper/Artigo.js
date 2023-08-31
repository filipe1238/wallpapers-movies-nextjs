import React from "react";

function Artigo({id, img, texto, height, width }) {
  let url = new URL(img);
  let imgThumb = url.origin + "/id/" + url.pathname.split("/")[2] + "/960/540";

  return (
    <div className="box">
      {/* <div className="icons">
        <FontAwesomeIcon className="icon regular" icon={faHeart} />
      </div> */}

      <a className="download-url" target="blank" href={`/wallpapers/${id}`}>
        <img src={imgThumb} className="card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <div className="caption mb-0">
          <div className="text-break text-end">
            By {texto}
            <p className="text-break text-muted">
              {height}x{width}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artigo;
