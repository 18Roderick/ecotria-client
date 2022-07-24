import React from "react";

const SearchBar = () => {
  return (
    <form action="#" className="float-left header-search ms-3">
      <div className="form-group mb-0 icon-input">
        <i className="feather-search font-sm text-grey-400"></i>
        <input
          type="text"
          placeholder="Start typing to search.."
          className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
        />
      </div>
    </form>
  );
};

export default SearchBar;
