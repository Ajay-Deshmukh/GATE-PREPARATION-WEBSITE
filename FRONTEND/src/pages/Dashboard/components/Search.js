// Search.js
import React from 'react';

export const Search = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative w-full">
      <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
      <input
        onChange={handleSearch}
        name="search"
        type="text"
        id="simple-search"
        className="bg-primary-50 border border-primary-300 text-slate-800 text-sm rounded-lg focus:border-primary-900 focus:border-2 focus-visible:outline-none block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        autoComplete="off"
        required=""
      />
    </div>
  );
};

