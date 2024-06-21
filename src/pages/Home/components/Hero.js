import { Link } from "react-router-dom";
import HeroImage from "../../../assets/Books.jpg"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div 
      // className="my-5"
      >
        <h2 className="text-5xl  font-bold">"Unlock Your Potential with GATE Prep Mastery"</h2>
        <p className="text-medium my-7 px-1 dark:text-slate-300 me-2">
        Prepare with confidence for the GATE exam. Access comprehensive study materials, expert guidance, and realistic mock tests designed to elevate your performance.
        </p>
        <Link
          to="/branches"
          type="button"
          className="text-white bg-primary-400 hover:bg-primary-500 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore
        </Link>
      </div>
      <div className="my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src={HeroImage}
          alt="Purity Plants Hero Section"
        />
      </div>
    </section>
  );
};
