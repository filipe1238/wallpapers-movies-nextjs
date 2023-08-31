import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NavigateButtonsParams({ searchParam, setSearchParam }) {
  /*   const [active, setActive] = useState(1); */

  return (
    <div className="container-fluid buttons">
      <div className="nav justify-content-center">
        
        <div className="col-12">
          <p className="text-center"> Página {searchParam.page}</p>
        </div>

        <div className="col-0">
          <button
            className={"btn border-0"}
            href="#"
            disabled={searchParam.page === 1}
            onClick={() => {
              if (searchParam.page - 1 < 1) return;
              setSearchParam({ ...searchParam, page: searchParam.page - 1 });
            }}
          >
           <FontAwesomeIcon icon={faArrowLeft} />  
          </button>
          <button
            className={"btn border-0"}
            href="#"
            onClick={() =>
              setSearchParam({ ...searchParam, page: searchParam.page + 1 })
            }
          >
             <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigateButtonsParams;
