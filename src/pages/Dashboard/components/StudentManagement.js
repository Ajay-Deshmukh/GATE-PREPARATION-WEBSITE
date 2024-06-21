import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for students
const mockStudents = [
  { id: 1, name: 'Alice Brown', branch: 'Mathematics', email: 'alice.brown@example.com', year: 3, testsGiven: 10 },
  { id: 2, name: 'Bob Green', branch: 'Science', email: 'bob.green@example.com', year: 2, testsGiven: 8 },
  { id: 3, name: 'Charlie Smith', branch: 'History', email: 'charlie.smith@example.com', year: 4, testsGiven: 12 },
];

export const StudentManagement = () => {
  const [students, setStudents] = useState(mockStudents);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    studentId: null,
    actionType: null // 'remove' action type
  });

  const openConfirmModal = (id) => {
    setConfirmModal({
      isOpen: true,
      studentId: id,
      actionType: 'remove'
    });
  };

  const closeConfirmModal = () => {
    setConfirmModal({
      isOpen: false,
      studentId: null,
      actionType: null
    });
  };

  const removeStudent = (id) => {
    // Update mock data (simulate removal)
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    closeConfirmModal(); // Close modal after removal
  };

  const removeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Student Management</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded shadow overflow-hidden">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Branch</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Tests Given</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map(student => (
            <tr key={student.id}>
            <td className="px-6 py-4 whitespace-nowrap">
  <Link to={`/students/${student.id}`} className="text-blue-500 hover:underline">{student.name}</Link>
</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.branch}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.testsGiven}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button onClick={() => openConfirmModal(student.id)} className="text-red-500 font-bold py-2 px-4 rounded ml-2">{removeIcon}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative bg-white w-96 p-8 rounded shadow-lg z-20">
            <p className="text-lg font-bold mb-4">Are you sure you want to remove this student?</p>
            <div className="flex justify-end">
              <button onClick={() => removeStudent(confirmModal.studentId)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Confirm</button>
              <button onClick={closeConfirmModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


