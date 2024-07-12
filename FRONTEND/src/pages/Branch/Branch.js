// import React from 'react';
// import BioTech from '../../assets/biotechnology.avif';
// import Computer from '../../assets/computer2.jpg'
// import Civil from '../../assets/civil.jpg'
// import Instru from '../../assets/instrumentation.avif'
// import Electrical from '../../assets/electricalcommunication.jpg'
// import Chemical from '../../assets/chemistry.jpg'
// import { Link } from 'react-router-dom';

// export const Branch = () => {
//   const nextArrow = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
//   </svg>
//   );

//   return (
//     <div className="grid grid-cols-3 justify-center m-7 ml-16 mr-16">
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/biotechnology">
//           <img src={BioTech} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/computerscience">
//           <img src={Computer} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/electrical">
//           <img src={Electrical} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/chemical">
//           <img src={Chemical} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/civil">
//           <img src={Civil} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className="m-5 max-w-xs bg-white rounded-lg border border-slate-200 shadow-md dark:bg-slate-900 dark:border-slate-700">
//         <Link to="/branches/instrumentation/">
//           <img src={Instru} className="rounded-lg w-full h-64 object-cover" alt="Gate Logo" />
//         </Link>
//       </div>
//       <div className='h-20'></div>
//     </div>
//   );
// };

import React from 'react';
import BioTech from '../../assets/Branches/biotechnology.avif';
import Computer from '../../assets/Branches/computer2.jpg';
import Civil from '../../assets/Branches/civil.jpg';
import Stat from '../../assets/Branches/statistics.avif';
import Electrical from '../../assets/Branches/electricalcommunication.jpg';
import Chemical from '../../assets/Branches/chemistry.jpg';
import Biomed from '../../assets/Branches/biomed.jpg';
import Mathematics from '../../assets/Branches/mathmatics.avif';
import Phy from '../../assets/Branches/physics.jpg';
import { Link } from 'react-router-dom';

const images = [
 
  { src: Computer, link: "/computer-science", name: 'Computer Science and Information Technology ' },
  { src: Electrical, link: "/electrical-comunication", name: 'Electrical and Communication Engineering' },
  { src: BioTech, link: "/biotechnology", name: 'Biotechnology' },
  { src: Biomed, link: "/biomedical", name: 'Biomedical Engineering' },
  { src: Mathematics, link: "/mathematics", name: 'Mathematics' },
  { src: Stat , link: "/statistics", name: 'Statistics' },
  { src: Phy, link: "/physics", name: 'Physics' },
  { src: Chemical, link: "/chemical-engineering", name: 'Chemical Engineering' },
  { src: Civil, link: "/civil-engineering", name: 'Civil Engineering' },
  

];



// NextArrow variable for navigation
const NextArrow = (
  <div className="absolute bottom-0 right-0 mr-2 mb-2 text-black font-bold z-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </div>
);

export const Branch = () => {
  return (
    <div className="grid grid-cols-3 justify-center m-7 ml-16 mr-16 gap-5">
      {images.map((image, index) => (
        <div key={index} className="relative bg-white rounded-lg border shadow-md overflow-hidden flex flex-col">
          <div className="relative group">
            <img src={image.src} className="rounded-t-lg w-full h-56  shadow-md object-cover" alt={image.name} />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-center h-full"> {/* Ensure text area takes full height */}
            <Link to={image.link} className="text-xl text-center font-bold hover:underline">{image.name}
          
          <div className="absolute bottom-0 right-0 mr-2 mb-2 text-black font-bold">
            {/* Render NextArrow variable */}
            {NextArrow}
            
          </div>
          </Link>
          </div>
        </div>
      ))}
  
      {/* Optional: Adding an empty div to ensure grid spacing */}
      <div className='h-40'></div>
    </div>
  );
};
