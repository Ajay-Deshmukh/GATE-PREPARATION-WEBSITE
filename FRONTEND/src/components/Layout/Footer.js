import React from 'react'

export const Footer = () => {
  return (
   

<footer className=" bottom-0  left-0 z-20 w-full bg-white border-t border-gray-200 shadow p-6 dark:bg-primary-100 dark:border-slate-50">
    <p className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()}
    {/* TODO : Change URL once hosted */}
    <a href="https://flowbite.com/" className="hover:text-primary-400 hover:font-bold">GATE™</a>. All Rights Reserved.
    </p>
</footer>

  )
}
