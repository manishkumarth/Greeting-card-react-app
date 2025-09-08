import React from 'react';

function SearchBox() {
  return (
    <div className="container my-4">
      <div className="form-floating d-flex justify-content-center align-item-center m-auto">
        <input
          type="search"
          className="form-control"
          id="searchBox"
          placeholder="Search..."
        />
        <label htmlFor="searchBox">Search</label>
      </div>
    </div>
  );
}

export default SearchBox;
