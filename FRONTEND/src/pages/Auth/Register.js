// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { register } from '../../services/authServices';

// export const Register = () => {
//   const navigate = useNavigate();
//   const nameRef = useRef();
//   const branchRef = useRef();
//   const roleRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();

//     async function handleRegister(event) {
//       event.preventDefault();
      
//       // Validate role selection
//       if (!roleRef.current.value) {
//         toast.error("Please select a role", {
//           closeButton: true,
//           position: 'top-right',
//         });
//         return;
//       }
    
//       try {
//         const authDetails = {
//           name: nameRef.current.value,
//           branch: branchRef.current.value,
//           role: roleRef.current.value,
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         };
        
//         const data = await register(authDetails);
//         if (data.accessToken) {
//           navigate('/branches/');
//         } else {
//           toast.error(data.message, {
//             closeButton: true,
//             position: 'top-right',
//           });
//         }
//       } catch (error) {
//         toast.error(error.message, {
//           closeButton: true,
//           position: 'top-right',
//         });
//       }
//     }
    


//   return (
//     <main>
//       <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
//           Register
//         </p>
//       </section>
//       <form>
//         <div className="mb-6">
//           <label
//             htmlFor="name"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your name
//           </label>
//           <input
//             ref={nameRef}
//             type="text"
//             id="name"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="John Doe"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="branch"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Branch
//           </label>
//           <input
//             ref={branchRef}
//             type="text"
//             id="branch"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="Branch Name"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="role"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Role
//           </label>
//           <select
//             ref={roleRef}
//             id="role"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your email (ves.ac.in)
//           </label>
//           <input
//   ref={emailRef}
//   type="email"
//   id="email"
//   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//   placeholder="john@ves.ac.in"
//   pattern="^[a-zA-Z0-9._%+-]+@ves\.ac\.in$"
//   required
//   autoComplete="off"
// />

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
//             placeholder="Password"
//             id="password"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             required
//             minLength="7"
//           />
//         </div>
//         <button
//           type="submit"
//           className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//           onClick={handleRegister}
//         >
//           Register
//         </button>
//       </form>
//     </main>
//   );
// };
// Register.js

// import React, { useState } from 'react';
// import { authServices } from '../../services/authServices';
// import { toast } from 'react-toastify';

// export const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role is student
//   const [approved, setApproved] = useState(role === 'student');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@ves\.ac\.in$/;
//     try {
//       if (!emailRegex.test(email)) {
//         throw new Error('Invalid email format. Email must end with ves.ac.in');
//       }
//       const newUser = await authServices.register({ name, email, password, role, approved });
//       toast.success('Registration successful!');
//       console.log(newUser);
//       // Handle successful registration (e.g., redirect to login page)
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       toast.error(error.message || 'Registration failed.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
//           Register
//         </p>
//       </section>
//       <form onSubmit={handleRegister} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="John Doe"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="john@example.com"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             placeholder="password"
//             autoComplete="new-password"
//             required
//           />
//         </div>
//         <div className="mb-20"> {/* Added margin bottom for spacing */}
//           <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Role
//           </label>
//           <select
//             id="role"
//             value={role}
//             onChange={(e) => {
//               setRole(e.target.value);
//               setApproved(e.target.value === 'student');
//             }}
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
//             required
//           >
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>
//         </div>
//         <div className="h-6"></div>
//         <button type="submit" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
//           Register
//         </button>
//       </form>
//       <div className="h-40"></div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { authServices } from '../../services/authServices';
import { toast } from 'react-toastify';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const [approved, setApproved] = useState(role === 'student');

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@ves\.ac\.in$/;
    try {
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email format. Email must end with ves.ac.in');
      }
      const newUser = await authServices.register({ name, email, password, role, approve: approved });
      toast.success('Registration successful!');
      console.log(newUser);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration error:', error.message);
      toast.error(error.message || 'Registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="John Doe"
            required
            autoComplete="off"
          />
        </div>
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
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="password"
            autoComplete="new-password"
            required
          />
        </div>
        <div className="mb-20"> {/* Added margin bottom for spacing */}
          <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setApproved(e.target.value === 'student');
            }}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="h-6"></div>
        <button type="submit" className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Register
        </button>
      </form>
      <div className="h-40"></div>
    </div>
  );
};
