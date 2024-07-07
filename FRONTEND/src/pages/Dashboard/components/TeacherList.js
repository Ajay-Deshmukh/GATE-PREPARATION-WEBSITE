// TeacherList.js
import React from 'react';

export const TeacherList = ({ teachers, showApprovedSection, toggleApprovedSection, approveTeacher, openConfirmModal, removeIcon }) => {
  return (
    <div>
      <div className="mb-4">
        <button onClick={toggleApprovedSection} className="text-gray-500">
          {showApprovedSection ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 transform rotate-90">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {showApprovedSection && (
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Approved Teachers</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded shadow overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teachers.map(teacher => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => openConfirmModal(teacher.id, 'disapprove')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Disapprove</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => openConfirmModal(teacher.id, 'remove')} className="text-red-500 font-bold py-2 px-4 rounded ml-2">{removeIcon}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <table className="min-w-full bg-white border border-gray-200 rounded shadow overflow-hidden">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Approved</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{teacher.approved ? 'Approved' : 'Pending'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {!teacher.approved && (
                  <button onClick={() => approveTeacher(teacher.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Approve</button>
                )}
                
                {teacher.approved && (
                  <button onClick={() => openConfirmModal(teacher.id, 'disapprove')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Disapprove</button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => openConfirmModal(teacher.id, 'remove')} className="text-red-500 font-bold py-2 px-4 rounded ml-2">{removeIcon}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

