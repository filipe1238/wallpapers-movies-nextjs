import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FooterNextPage({ searchParam, setSearchParam }) {
  return (
    <footer className="text-end">
      <button
        className="btn "
        onClick={() => {
          window.scrollTo(0, 0);
          setSearchParam({ ...searchParam, page: searchParam.page + 1 });
        }}
      >
        Próxima <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </footer>
  );
}

export default FooterNextPage;
