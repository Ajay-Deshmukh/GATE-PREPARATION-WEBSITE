import React, { useRef } from "react";

export const Search = ({ setSearchSection }) => {
  const searchRef = useRef();
  const searchIcon = (
    <div className="bg-primary-400 dark:bg-primary-400 p-2 rounded-lg ml-2">
      <svg
        className="w-6 h-6 text-white "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
  );


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
                    className="hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mr-5 "
                    
                    >
                        {searchIcon}
                    </button>
      </form>
    </div>
  );
};
