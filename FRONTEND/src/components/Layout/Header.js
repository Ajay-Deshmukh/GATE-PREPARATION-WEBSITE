import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import DarkLogo from "../../assets/DarkLogo.png";
import { DropdownLoggedIn } from "./DropdownLoggedIn";
import { DropdownLoggedOut } from "./DropdownLoggedOut";
import { Search } from "./Search";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [searchSection, setSearchSection] = useState(false);
  const activeClasses =
    "block py-2 px-3 text-primary-400 dark:text-white rounded underline";
  const inactiveClasses =
    "block py-2 px-3 text-primary-400 dark:text-white rounded";
  const lightModeIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className="fill-white stroke-primary-800 group-hover:stroke-white"
      ></path>
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className="stroke-primary-800 group-hover:stroke-white"
      ></path>
    </svg>
  );

  const darkModeIcon = (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className="fill-white"
      ></path>
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className="fill-white group-hover:fill-primary-800"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className="fill-white group-hover:fill-primary-800"
      ></path>
    </svg>
  );
  const userIcon = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const searchIcon = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  );

  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        //Clicked outside the dropdown, close it
        setDropdown(false);
      }
    };

    //Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    //Clean up the event Listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header>
      <nav className="bg-white dark:bg-primary-700 border:gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center rtl:space-x-reverse">
            <img
              src={darkMode ? DarkLogo : Logo}
              className="h-14"
              alt="Gate Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center justify-center flex-grow p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:text-primary">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClasses : inactiveClasses
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/branches"
                className={({ isActive }) =>
                  isActive ? activeClasses : inactiveClasses
                }
              >
                Branch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exam"
                className={({ isActive }) =>
                  isActive ? activeClasses : inactiveClasses
                }
              >
                Exam
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center relative">
            <button
              type="button"
              className="hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mr-5"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? darkModeIcon : lightModeIcon}
            </button>
            <button
              type="button"
              className="hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mr-5"
              onClick={() => setSearchSection(!searchSection)}
            >
              {searchIcon}
            </button>
            <button
              type="button"
              className="hover:cursor-pointer text-xl text-slate-800 dark:text-slate-50 mr-5"
              onClick={() => setDropdown(!dropdown)}
            >
              {userIcon}
            </button>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropDown={setDropdown} refProp={dropdownRef} />
              ) : (
                <DropdownLoggedOut setDropDown={setDropdown} refProp={dropdownRef} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
