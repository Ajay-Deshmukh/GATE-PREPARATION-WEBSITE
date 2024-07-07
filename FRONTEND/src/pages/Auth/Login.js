// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { login } from '../../services/authServices';

// export const Login = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const navigate = useNavigate();

//   async function handleLogin(event) {
//     event.preventDefault();
//     try {
//       const authDetails = {
//         email: emailRef.current.value,
//         password: passwordRef.current.value,
//       };
//       const data = await login(authDetails);
//       if (data.accessToken) {
//         navigate('/products/');
//       } else {
//         toast.error(data.message, {
//           closeButton: true,
//           position: 'top-right',
//         });
//       }
//     } catch (error) {
//       toast.error(error.message, {
//         closeButton: true,
//         position: 'top-right',
//       });
//     }
//   }
  
//   return (
//     <main>
//       <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
//           Login
//         </p>
//       </section>
//       <form>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your email
//           </label>
//           <input
//             ref={emailRef}
//             type="email"
//             id="email"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="john@example.com"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your password
//           </label>
//           <input
//             ref={passwordRef}
//             type="password"
//             id="password"
//             placeholder="Password"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
//         onClick={handleLogin}>
//           Log In
//         </button>
//       </form>
//       <button className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">
//         Dashboard
//       </button>
//     </main>
//   );
// };
// LoginForm.js

import React, { useState } from 'react';
import { authServices } from '../../services/authServices';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectTo, setRedirectTo] = useState(null); // State to manage redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authServices.login({ email, password });
      setUser(user); // Set user state
      toast.success('Login successful!');
      setRedirectTo(user.role); // Set role for conditional rendering of links
    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
           Login
         </p>
       </section>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
             placeholder="john@example.com"
             required
             autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            required
          />
        </div>
        <button type="submit" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Log In
        </button>
      </form>

      {/* Conditional rendering of links based on redirectTo state */}
      {redirectTo === 'admin' && (
        <div className="mt-4">
          <Link to="/admin-dashboard" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Go To Dashboard</Link>
        </div>
      )}
      {redirectTo === 'teacher' && (
        <div className="mt-4">
          <Link to="/teacher-dashboard" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Go To Dashboard</Link>
        </div>
      )}
      {redirectTo === 'student' && (
        <div className="mt-4">
          <Link to="/exam" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Go To Dashboard</Link>
        </div>
      )}
    </div>
  );
};

