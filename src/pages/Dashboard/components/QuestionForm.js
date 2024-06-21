import React, { useState } from 'react';

const initialQuestionState = {
  branch: '',
  subject: '',
  question: '',
  options: ['', '', '', ''],
  correctAnswer: '',
};

const mockBranches = ['Computer Science', 'Biotechnology', 'History']; // Example list of branches
const mockSubjects = {
  Computer: ['Algebra', 'Geometry', 'Calculus'],
  Science: ['Physics', 'Chemistry', 'Biology'],
  History: ['Ancient History', 'Modern History', 'World History'],
};

 export const QuestionForm = () => {
  const [questionData, setQuestionData] = useState(initialQuestionState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData({ ...questionData, options: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API
    console.log('Form submitted:', questionData);
    // Reset form after submission if needed
    setQuestionData(initialQuestionState);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Multiple Choice Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Branch</label>
          <select
            name="branch"
            value={questionData.branch}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Branch</option>
            {mockBranches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
          {/* <input
            type="text"
            name="subject"
            value={questionData.subject}
            onChange={handleChange}
            placeholder="Type or select subject"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          /> */}
          {/* Alternatively, use a dropdown for subjects based on selected branch */}
          {/* Dropdown example (uncomment if using dropdown for subjects): */}
          <select
            name="subject"
            value={questionData.subject}
            onChange={handleChange}
            className="w-full mt-2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Subject</option>
            {questionData.branch &&
              mockSubjects[questionData.branch].map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Question</label>
          <textarea
            name="question"
            value={questionData.question}
            onChange={handleChange}
            rows="4"
            placeholder="Enter question text here"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Options</label>
          {questionData.options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className="w-full mt-2 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Correct Answer</label>
          <select
            name="correctAnswer"
            value={questionData.correctAnswer}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Correct Answer</option>
            {questionData.options.map((option, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-primary-400 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded"
        >
          Add Question
        </button>
      </form>
      <div className='h-40'></div>
    </div>
  );
};

