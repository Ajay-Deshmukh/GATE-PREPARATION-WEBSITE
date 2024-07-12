// import React, { useState } from 'react';

// // Mock data for teachers
// const mockTeachers = [
//   { id: 1, name: 'John Doe', branch: 'Mathematics', email: 'john.doe@example.com', approved: true },
//   { id: 2, name: 'Jane Smith', branch: 'Science', email: 'jane.smith@example.com', approved: false },
//   { id: 3, name: 'Michael Johnson', branch: 'History', email: 'michael.johnson@example.com', approved: false },
// ];

// export const TeacherManagement = () => {
//   const [teachers, setTeachers] = useState(mockTeachers);
//   const [confirmModal, setConfirmModal] = useState({
//     isOpen: false,
//     teacherId: null,
//     actionType: null // 'disapprove' or 'remove'
//   });

//   const openConfirmModal = (id, type) => {
//     setConfirmModal({
//       isOpen: true,
//       teacherId: id,
//       actionType: type
//     });
//   };

//   const closeConfirmModal = () => {
//     setConfirmModal({
//       isOpen: false,
//       teacherId: null,
//       actionType: null
//     });
//   };

//   const approveTeacher = (id) => {
//     // Update mock data (simulate approval)
//     const updatedTeachers = teachers.map(teacher =>
//       teacher.id === id ? { ...teacher, approved: true } : teacher
//     );
//     setTeachers(updatedTeachers);
//   };

//   const disapproveTeacher = (id) => {
//     // Update mock data (simulate disapproval)
//     const updatedTeachers = teachers.map(teacher =>
//       teacher.id === id ? { ...teacher, approved: false } : teacher
//     );
//     setTeachers(updatedTeachers);
//     closeConfirmModal(); // Close modal after disapproval
//   };

//   const removeTeacher = (id) => {
//     // Update mock data (simulate removal)
//     const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
//     setTeachers(updatedTeachers);
//     closeConfirmModal(); // Close modal after removal
//   };

//   const removeIcon = (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//       <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//     </svg>
//   );

//   return (
//     <div className="container mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Teacher Management</h2>
//       <table className="min-w-full bg-white border border-gray-200 rounded shadow overflow-hidden">
//         <thead className="bg-gray-100 border-b border-gray-200">
//           <tr>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Name</th>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Branch</th>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Email</th>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Approved</th>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             <th className="px-6 py-3 text-left text-l font-medium text-gray-500 uppercase tracking-wider"></th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {teachers.map(teacher => (
//             <tr key={teacher.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{teacher.branch}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{teacher.approved ? 'Approved' : 'Pending'}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 {!teacher.approved && (
//                   <button onClick={() => approveTeacher(teacher.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Approve</button>
//                 )}
                
//                 {teacher.approved && (
//                   <button onClick={() => openConfirmModal(teacher.id, 'disapprove')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Disapprove</button>
//                 )}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                 <button onClick={() => openConfirmModal(teacher.id, 'remove')} className="text-red-500 font-bold py-2 px-4 rounded ml-2">{removeIcon}</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Confirmation Modal */}
//       {confirmModal.isOpen && (
//         <div className="fixed inset-0 z-10 flex items-center justify-center">
//           <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
//           <div className="relative bg-white w-96 p-8 rounded shadow-lg z-20">
//             <p className="text-lg font-bold mb-4">Are you sure you want to {confirmModal.actionType === 'disapprove' ? 'disapprove' : 'remove'} this teacher?</p>
//             <div className="flex justify-end">
//               <button onClick={() => {
//                 if (confirmModal.actionType === 'disapprove') {
//                   disapproveTeacher(confirmModal.teacherId);
//                 } else if (confirmModal.actionType === 'remove') {
//                   removeTeacher(confirmModal.teacherId);
//                 }
//               }} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Confirm</button>
//               <button onClick={closeConfirmModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    teacherId: null,
    actionType: null // 'disapprove' or 'remove'
  });

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://localhost:8000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Filter teachers who are 'teacher' and not approved
        const filteredTeachers = data.filter(teacher => teacher.role === 'teacher' && !teacher.approved);
        setTeachers(filteredTeachers); // Update teachers state with filtered data
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or retry logic if needed
      }
    };

    fetchTeachers(); // Call fetch function when component mounts
  }, []); // Empty dependency array means this effect runs only once after initial render

  // Function to approve a teacher (update UI and backend)
  // Function to approve a teacher (update UI and backend)
const approveTeacher = async (id) => {
  try {
    // Update UI first
    const updatedTeachers = teachers.map(teacher =>
      teacher.id === id ? { ...teacher, approved: true } : teacher
    );
    setTeachers(updatedTeachers);

    // Find the teacher to approve
    const teacherToApprove = teachers.find(teacher => teacher.id === id);

    // Update backend
    const response = await fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...teacherToApprove, // Send all details of the teacher
        approved: true  // Update approved status
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to approve teacher');
    }
  } catch (error) {
    console.error('Error approving teacher:', error);
    // Handle error state or retry logic if needed
  }
};

  // Function to disapprove a teacher (update UI and backend)
  const disapproveTeacher = async (id) => {
    try {
      // Update UI first
      const updatedTeachers = teachers.map(teacher =>
        teacher.id === id ? { ...teacher, approved: false } : teacher
      );
      setTeachers(updatedTeachers);

      // Update backend
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved: false }),
      });
      if (!response.ok) {
        throw new Error('Failed to disapprove teacher');
      }
    } catch (error) {
      console.error('Error disapproving teacher:', error);
      // Handle error state or retry logic if needed
    }
  };

  // Function to remove a teacher (update UI and backend)
  const removeTeacher = async (id) => {
    try {
      // Update UI first
      const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
      setTeachers(updatedTeachers);

      // Update backend
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove teacher');
      }
    } catch (error) {
      console.error('Error removing teacher:', error);
      // Handle error state or retry logic if needed
    }
  };

  // Function to open the confirmation modal
  const openConfirmModal = (id, type) => {
    setConfirmModal({
      isOpen: true,
      teacherId: id,
      actionType: type
    });
  };

  // Function to close the confirmation modal
  const closeConfirmModal = () => {
    setConfirmModal({
      isOpen: false,
      teacherId: null,
      actionType: null
    });
  };

  const removeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Teacher Management</h2>
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

      {/* Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative bg-white w-96 p-8 rounded shadow-lg z-20">
            <p className="text-lg font-bold mb-4">Are you sure you want to {confirmModal.actionType === 'disapprove' ? 'disapprove' : 'remove'} this teacher?</p>
            <div className="flex justify-end">
              <button onClick={() => {
                if (confirmModal.actionType === 'disapprove') {
                  disapproveTeacher(confirmModal.teacherId);
                } else if (confirmModal.actionType === 'remove') {
                  removeTeacher(confirmModal.teacherId);
                }
              }} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Confirm</button>
              <button onClick={closeConfirmModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
