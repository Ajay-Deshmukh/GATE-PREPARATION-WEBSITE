// ConfirmationModal.js
import React from 'react';

export const ConfirmationModal = ({ isOpen, closeConfirmModal, confirmAction, actionType, teacherId }) => {
  const handleConfirm = () => {
    if (actionType === 'disapprove') {
      confirmAction.disapprove(teacherId);
    } else if (actionType === 'remove') {
      confirmAction.remove(teacherId);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="relative bg-white w-96 p-8 rounded shadow-lg z-20">
          <p className="text-lg font-bold mb-4">
            Are you sure you want to {actionType === 'disapprove' ? 'disapprove' : 'remove'} this teacher?
          </p>
          <div className="flex justify-end">
            <button onClick={handleConfirm} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
              Confirm
            </button>
            <button onClick={closeConfirmModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};


