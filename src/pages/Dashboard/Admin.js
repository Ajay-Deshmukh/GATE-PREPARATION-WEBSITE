import React from 'react';
import { Link } from 'react-router-dom';

export const Admin = () => {
  return (
    <div className="ml-10">
      <h1 className='text-3xl font-bold m-8 dark:text-white'>ADMIN DASHBOARD</h1>

      <div className="flex justify-center gap-5">
        {/* Teacher Container */}
        <Link to = '/teacher'>
        <div className=" bg-primary-151 hover:bg-primary-150  hover:underline rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center h-56 w-56">
          <p className="text-2xl font-bold">TEACHER</p>
        </div>
        </Link>

        {/* Student Container */}
        <Link to = '/students'>
        <div className="bg-primary-251 hover:bg-primary-250 hover:underline rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-center h-56 w-56">
          <p className="text-2xl font-bold">STUDENT</p>
        </div>
        </Link>
      </div>
    </div>
  );
};
