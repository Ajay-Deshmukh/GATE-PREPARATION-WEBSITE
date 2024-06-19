import React from "react";
import NotFoundImage from "../assets/NotFound.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2 mt-5">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-7xl text-slate-800 dark:text-slate-50 font-medium">
            You seem to be Lost!
          </h2>
          <p className="text-3xl text-slate-800 dark:text-slate-50">
            404 Page Not Found
          </p>
          <div className="max-w-lg mt-14">
            <img className="rounded" src={NotFoundImage} alt="Not Found" />
          </div>
        </div>
        <div className="flex justify-center py-4">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-1000 focus:outline-none dark:bg-primary-800 dark:hover:bg-primary-1000"
          >
            Back To Home!
          </Link>
        </div>
      </section>
    </main>
  );
};
