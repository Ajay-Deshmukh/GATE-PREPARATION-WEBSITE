// import React, { useState, useEffect } from 'react';
// import questionsData from '../../../data/db.json'; // Ensure this path is correct

// export const ExaminationPage = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState([]);
//   const [score, setScore] = useState(0);
//   const [filteredQuestions, setFilteredQuestions] = useState([]);

//   useEffect(() => {
//     // Simulate asynchronous data fetching
//     setTimeout(() => {
//       try {
//         const filtered = [];
//         // Manually iterate over questionsData to include only questions from the year 2024
//         for (let i = 0; i < questionsData.length; i++) {
//           if (questionsData[i].year === 2024) {
//             filtered.push(questionsData[i]);
//           }
//         }
//         console.log('Filtered Questions:', filtered);
//         setFilteredQuestions(filtered);
//         setSelectedOption(new Array(filtered.length).fill(null));
//       } catch (error) {
//         console.error('Error fetching or filtering data:', error);
//         // Handle error state if needed
//       }
//     }, 1000); // Simulated delay of 1 second
//   }, []);

//   const handleOptionSelect = (option) => {
//     const updatedOptions = [...selectedOption];
//     updatedOptions[currentQuestion] = option;
//     setSelectedOption(updatedOptions);
//   };

//   const clearSelection = () => {
//     const updatedOptions = [...selectedOption];
//     updatedOptions[currentQuestion] = null;
//     setSelectedOption(updatedOptions);
//   };

//   const submitExam = () => {
//     let totalScore = 0;
//     for (let i = 0; i < filteredQuestions.length; i++) {
//       if (selectedOption[i] === filteredQuestions[i].correct_option) {
//         totalScore++;
//       }
//     }
//     setScore(totalScore);
//   };

//   if (!Array.isArray(filteredQuestions) || filteredQuestions.length === 0) {
//     return <div>Loading...</div>; // Handle loading state or error
//   }

//   return (
//     <div className="bg-gray-200 min-h-screen p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Interactive Exam</h1>

//         <div className="flex justify-between items-center mb-4">
//           <button onClick={clearSelection} className="px-4 py-2 bg-red-500 text-white rounded">
//             Clear Selection
//           </button>
//           <button onClick={submitExam} className="px-4 py-2 bg-blue-500 text-white rounded">
//             Submit Exam
//           </button>
//         </div>

//         <div className="grid grid-cols-4 gap-2 mb-4">
//           {filteredQuestions.map((question, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentQuestion(index)}
//               className={`px-4 py-2 text-white rounded ${
//                 index === currentQuestion ? 'bg-green-500' :
//                 selectedOption[index] !== null ? 'bg-gray-400' : 'bg-gray-700'
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>

//         <div className="bg-white p-6 rounded shadow">
//           <p className="text-xl font-semibold mb-4">{filteredQuestions[currentQuestion].question}</p>
//           <div className="grid grid-cols-2 gap-4">
//             {filteredQuestions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleOptionSelect(option)}
//                 className={`px-4 py-2 text-white rounded ${
//                   selectedOption[currentQuestion] === option ? 'bg-green-500' : 'bg-gray-700'
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>

//         {score !== 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-bold mb-4">Your Score</h2>
//             <p className="text-3xl font-bold">{score}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';

const hardcodedQuestions = [
  {
    id: 1,
    year: 2024,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    correct_option: 'Paris'
  },
  {
    id: 2,
    year: 2024,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correct_option: 'Mars'
  },
  // Add more questions as needed
  {
    id: 20,
    year: 2024,
    question: 'Which scientist developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    correct_option: 'Albert Einstein'
  }
];

export const ExaminationPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(new Array(hardcodedQuestions.length).fill(null));
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds (600 seconds)
  const [showScore, setShowScore] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [examStartTime, setExamStartTime] = useState(null); // Track start time of exam

  // Countdown timer effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          return 0;
        }
      });
    }, 1000);

    // Clean up interval on component unmount or timer reaching 0
    return () => clearInterval(countdown);
  }, []);

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOption];
    updatedOptions[currentQuestion] = option;
    setSelectedOption(updatedOptions);
  };

  const clearSelection = () => {
    const updatedOptions = [...selectedOption];
    updatedOptions[currentQuestion] = null;
    setSelectedOption(updatedOptions);
  };

  const submitExam = () => {
    let totalScore = 0;
    for (let i = 0; i < hardcodedQuestions.length; i++) {
      if (selectedOption[i] === hardcodedQuestions[i].correct_option) {
        totalScore++;
      }
    }
    setScore(totalScore);
    setShowScore(true);
    setTimer(0); // Stop the timer
  };

  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion - 1);
  };

  const goToNextQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  // Convert seconds to mm:ss format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Calculate total time taken
  const totalTimeTaken = () => {
    if (examStartTime) {
      const endTime = new Date();
      const totalSeconds = Math.floor((endTime - examStartTime) / 1000);
      return formatTime(totalSeconds);
    }
    return null;
  };

  const startExam = () => {
    setExamStartTime(new Date());
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Interactive Exam</h1>
        {!showScore && timer > 0 && (
          <div className="text-lg font-bold">Time Remaining: {formatTime(timer)}</div>
        )}
      </div>

      {showScore ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Your Score</h2>
          <p className="text-3xl font-bold">{score}</p>
          <p className="mt-4">Total Time Taken: {totalTimeTaken()}</p>
          <button onClick={toggleReviewMode} className="px-4 py-2 mt-4 bg-blue-500 text-white rounded">
            {reviewMode ? 'Hide Review' : 'Review Questions'}
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="grid grid-cols-4 gap-2">
              {hardcodedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    if (!examStartTime) {
                      startExam();
                    }
                  }}
                  className={`px-4 py-2 text-white rounded ${
                    index === currentQuestion ? 'bg-green-500' :
                    selectedOption[index] !== null ? 'bg-gray-400' : 'bg-gray-700'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow mb-4">
            <p className="text-xl font-semibold mb-4">{hardcodedQuestions[currentQuestion].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {hardcodedQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-4 py-2 text-white rounded ${
                    selectedOption[currentQuestion] === option ? 'bg-green-500' : 'bg-gray-700'
                  }`}
                  disabled={showScore || reviewMode}
                >
                  {option}
                </button>
              ))}
            </div>
            {reviewMode && (
              <p className="mt-2"><strong>Correct Answer:</strong> {hardcodedQuestions[currentQuestion].correct_option}</p>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <button onClick={clearSelection} className="px-4 py-2 bg-red-500 text-white rounded">
              Clear Selection
            </button>
            <div>
              <button onClick={goToPreviousQuestion} className={`px-4 py-2 mr-2 bg-gray-500 text-white rounded ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Previous
              </button>
              <button onClick={goToNextQuestion} className={`px-4 py-2 bg-blue-500 text-white rounded ${currentQuestion === hardcodedQuestions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Next
              </button>
            </div>
          </div>

          {!reviewMode && (
            <div className="text-center">
              <button onClick={submitExam} className="px-4 py-2 mt-4 bg-green-500 text-white rounded">
                Submit Exam
              </button>
            </div>
          )}
        </>
      )}

      {reviewMode && (
        <div>
          <h2 className="text-xl font-bold mb-4 mt-8">Review Questions</h2>
          {hardcodedQuestions.map((question, index) => (
            <div key={index} className="bg-white p-6 rounded shadow mb-4">
              <p className="text-xl font-semibold mb-4">{question.question}</p>
              <p className={`text-lg font-bold ${selectedOption[index] === question.correct_option ? 'text-green-500' : 'text-red-500'}`}>
                Your Answer: {selectedOption[index] || 'Not answered'}
              </p>
              <p className="text-lg font-bold">Correct Answer: {question.correct_option}</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`px-4 py-2 text-white rounded ${
                      question.correct_option === option ? 'bg-green-500' : 'bg-gray-700'
                    }`}
                    disabled
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="h-40"></div>
        </div>
      )}
    </div>
  );
};
