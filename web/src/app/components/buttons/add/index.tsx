'use client';
import React, { useState } from 'react';
import { AddContactModal } from '../../modals/addModal';



export const AddButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='mr-0'>
      <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded px-8 py-2">
        + Add Contact
      </button>
      {isOpen && <AddContactModal onClose={handleClose} />}
    </div>
  );
};