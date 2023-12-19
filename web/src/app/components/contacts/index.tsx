// Contacts.tsx
'use client';
import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ContactsContext } from '../contexts/contacts';
import { InputFieldContext } from '../contexts/input';

interface Contact {
  name: string;
  number: string;
}

export const Contacts: React.FC = () => {
  const { filteredContacts } = useContext(InputFieldContext);
  const { removeContact, editContact } = useContext(ContactsContext);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleEdit = (index: number, contact: Contact) => {
    setEditingIndex(index);
    setEditingContact(contact);
  };

  const handleSave = (index: number) => {
    if (editingContact) {
      editContact(index, editingContact);
    }
    setEditingIndex(null);
    setEditingContact(null);
  };

  const handleRemove = (index: number) => {
    removeContact(index);
    setEditingIndex(null);
    setEditingContact(null);
  };

  return (
    <div className="bg-transparent w-full">
      {filteredContacts.map((contact: Contact, index: number) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg flex justify-between items-center">
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={editingContact?.name || ''}
                onChange={e => setEditingContact({ name: e.target.value, number: editingContact?.number || '' })}
                onKeyDown={e => e.key === 'Enter' && handleSave(index)}
              />
              <input
                type="text"
                value={editingContact?.number || ''}
                onChange={e => setEditingContact({ name: editingContact?.name || '', number: e.target.value })}
                onKeyDown={e => e.key === 'Enter' && handleSave(index)}
              />
            </div>
          ) : (
            <div onClick={() => handleEdit(index, contact)}>
              <div className="text-black text-lg font-bold">{contact.name}</div>
              <div className="text-gray-400">{contact.number}</div>
            </div>
          )}
          <div onClick={() => handleRemove(index)}>
            <FaTrash className="cursor-pointer text-red-500"/>
          </div>
        </div>
      ))}
    </div>
  );
};