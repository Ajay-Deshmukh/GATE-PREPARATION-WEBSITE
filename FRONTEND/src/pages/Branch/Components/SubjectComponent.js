import React, { useState } from 'react';

export const SubjectComponent = ({ subjects }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubject = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Inline styles for scrollbar customization
  const scrollbarStyles = {
    maxHeight: '12rem', // Example max height
    overflowY: 'auto',
    borderRadius: '10px', // Rounded corners
    scrollbarColor: '#990033 ', // Color of the thumb and track
  };

  return (
    <div className="ml-16 mr-10">
      <div className="subject-container dark:text-white">
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="py-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleSubject(index)}
              >
                <span className="text-xl font-bold">{subject.name}</span>
                <span className="ml-2">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div style={scrollbarStyles} className="max-h-48 overflow-y-auto rounded-lg mt-2">
                  <ul className="divide-y divide-gray-200">
                    {subject.subtopics.map((subtopic, idx) => (
                      <li key={idx} className="p-4">
                        {subtopic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
