'use client';
import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ContactsContext } from '../../contexts/contacts';
import { InputFieldContext } from '../../contexts/input';

interface Children { 
  children: React.ReactNode
}


export const InputField: React.FC<Children> = ({ children }) => {
  const { contacts } = useContext(ContactsContext);
  const [search, setSearch] = useState('');

  const filteredContacts = search
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      )
    : contacts;

  return (
    <React.Fragment>
      <InputFieldContext.Provider value={{ filteredContacts }}>
        <div className="flex flex-col border-2 border-solid bg-transparent mt-[2rem] mb-[2rem] bg-white p-4">
          <div className="flex flex-row">
            <div className="flex items-center pointer-events-none text-gray-400"> 
              <FaSearch />
            </div>
      
            <input
              type="tel"
              className="bg-transparent ml-2 w-full"
              placeholder="Search for contact by last name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col bg-white p-3">
          {children}
        </div>
      </InputFieldContext.Provider>
    </React.Fragment>
  );
};

