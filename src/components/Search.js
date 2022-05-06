import React, {useState} from "react";

function Search({search, handleSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={e =>handleSearch(e)} value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
