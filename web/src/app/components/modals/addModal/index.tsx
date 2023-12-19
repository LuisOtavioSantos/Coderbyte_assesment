'use cleint';
import React, { useContext, useState } from 'react';
import { ContactsContext } from '../../contexts/contacts';

interface Contact {
  name: string;
  number: string;
}

interface AddContactModalProps {
  onClose: () => void;
}

export const AddContactModal: React.FC<AddContactModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { addContact } = useContext(ContactsContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Number:
          <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
        </label>
        <input className='bg-green-500 py-2 px-8 border-r-8' type="submit" value="Add Contact" />
      </form>
    </div>
  );
};