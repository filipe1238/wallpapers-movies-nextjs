import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//find icon
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavigateButtonsParams from "../common/NavigateButtonsParams";

function SearchMovies({ searchParam, setSearchParam }) {
  const [search, setSearch] = useState("");

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    setSearchParam({ ...searchParam, page: 1, query: search });
  };

  return (
    <>
      <form
        className="form-inline my-2"
        onSubmit={(e) => handleSubmitQuery(e)}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control mr-sm-2 "
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            <FontAwesomeIcon icon={faSearch} />
            Pesquisar
          </button>
        </div>
      </form>
      <NavigateButtonsParams
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
    </>
  );
}

export default SearchMovies;
