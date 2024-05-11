import React from "react";

function Search({ search, setSearch }) {
  return (
    <>
      <form className="wrapper" onSubmit={(e) => e.preventDefault()}>
        <input   
          required
          type="text"
          value={search}
          role="searchBox"
          placeholder="Searching Items"
          onChange={(e) => setSearch(e.target.value)}
        />
        
      </form>
    </>
  );
}

export default Search;
