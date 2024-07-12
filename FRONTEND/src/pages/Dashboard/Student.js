// DashboardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Student = () => {
  // Mock data for PYQs and past tests
  const pyqTests = [
    { id: 1, title: 'PYQ 2023' },
    { id: 2, title: 'PYQ 2022' },
    { id: 3, title: 'PYQ 2021' },
    { id: 4, title: 'PYQ 2020' },
    // Add more PYQ entries as needed
  ];

  const pastTests = [
    { id: 10, title: 'Past Test 1', date: '2024-06-15' },
    { id: 11, title: 'Past Test 2', date: '2024-05-30' },
    // Remaining past test entries...
  ];

  // Slick carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Student Dashboard</h1>

      {/* PYQs Carousel */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Previous Year Questions (PYQs)</h2>
        <Slider {...carouselSettings}>
          {pyqTests.map(test => (
            <div key={test.id}>
              <Link to={`/exam-page`}>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-2">{test.title}</h2>
                  {/* Removed date rendering */}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Past Tests Carousel */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Past Tests</h2>
        <Slider {...carouselSettings}>
          {pastTests.map(test => (
            <div key={test.id}>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">{test.title}</h2>
                <p className="text-sm text-gray-600">Date: {test.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Customized Test Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Customized Test</h2>
        <p className="mb-2">Create your own test:</p>
        <Link
          to="/custom-test"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Customize Test
        </Link>
      </div>
      <div className="h-40"></div>
    </div>
  );
};

export default Student;
