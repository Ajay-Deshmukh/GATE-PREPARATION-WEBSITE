import React, { useRef } from "react";

export const Search = ({ setSearchSection }) => {
  const searchRef = useRef();

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-1">
      <form  className="flex items-center">
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          <input
            ref={searchRef}
            name="search"
            type="text"
            id="simple-search"
            className="bg-primary-50 border border-primary-300 text-slate-800 text-sm rounded-lg focus:border-primary-900 focus:border-2 focus-visible:outline-none block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search"
            autoComplete="off"
            required=""
          />
        </div>
        <button
          type="submit"
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary-700 rounded-lg border border-primary-800 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 "
        ></button>
      </form>
    </div>
  );
};
