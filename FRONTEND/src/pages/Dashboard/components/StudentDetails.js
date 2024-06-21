import React from 'react';

// Mock data for student details and tests
const mockStudentDetails = {
  id: 1,
  name: 'Alice Brown',
  branch: 'Mathematics',
  email: 'alice.brown@example.com',
  year: 3,
};

const mockTests = [
  { id: 1, testName: 'Math Quiz 1', correctAnswers: 7, incorrectAnswers: 3, totalQuestions: 10 },
  { id: 2, testName: 'Science Quiz 2', correctAnswers: 5, incorrectAnswers: 5, totalQuestions: 10 },
  { id: 3, testName: 'History Quiz 3', correctAnswers: 8, incorrectAnswers: 2, totalQuestions: 10 },
];

export const StudentDetails = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Student Details</h2>
      <div className="bg-white  dark:bg-black border border-gray-200 rounded shadow overflow-hidden">
        <div className="px-6 py-4">
          <p className='dark:text-white'><span className="font-bold dark:text-white">Name:</span> {mockStudentDetails.name}</p>
          <p className='dark:text-white'><span className="font-bold dark:text-white">Branch:</span> {mockStudentDetails.branch}</p>
          <p className='dark:text-white'><span className="font-bold dark:text-white">Email:</span> {mockStudentDetails.email}</p>
          <p className='dark:text-white'><span className="font-bold dark:text-white">Year:</span> {mockStudentDetails.year}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-4 dark:text-white">Tests</h2>
      <div className="bg-white border border-gray-200 rounded shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 ">
            <tr>
              <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
              <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Correct Answers</th>
              <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Incorrect Answers</th>
              <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Total Questions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockTests.map(test => (
              <tr key={test.id} className='dark:bg-black'>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">{test.testName}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">{test.correctAnswers}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">{test.incorrectAnswers}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-white">{test.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

