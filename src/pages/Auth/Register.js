import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/authServices";

export const Register = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const branchRef = useRef();
  const roleRef = useRef(); // Ref for role input
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetails = {
        name: nameRef.current.value,
        branch: branchRef.current.value,
        role: roleRef.current.value, // Using roleRef for role value
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const data = await register(authDetails);
      data.accessToken
        ? navigate("/branches/")
        : toast.error(data, {
            closeButton: true,
            position: "top-right",
          });
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "top-right",
      });
    }
  }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="John Doe"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="branch"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Branch
          </label>
          <input
            ref={branchRef}
            type="text"
            id="branch"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="Branch Name"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Role
          </label>
          <select
            ref={roleRef} // Ref for role dropdown
            id="role"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            placeholder="john@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light dark:focus:border-primary-300"
            required
            minLength="7"
          />
        </div>
        <button
          type="submit"
          className="hover:cursor-pointer text-white bg-primary-700 hover:bg-primary-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </main>
  );
};
