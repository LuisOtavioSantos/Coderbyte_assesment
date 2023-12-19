'use client';
import React, { useContext } from 'react';
import { InputFieldContext } from '../contexts/input';

interface Contact {
  name: string;
  number: string;
}

export const Contacts: React.FC = () => {
  const { filteredContacts } = useContext(InputFieldContext); // Accessing filteredContacts from context

  return (
    <div className="mt-4 bg-transparent">
      {filteredContacts.map((contact: Contact, index: number) => (
        <div key={index} className="mt-2">
          <div className="text-black">{contact.name}</div>
          <div className="text-gray-400">{contact.number}</div>
        </div>
      ))}
    </div>
  );
};