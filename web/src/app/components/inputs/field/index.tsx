'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { InputFieldContext } from '../../contexts/input';

interface Children { 
  children: React.ReactNode
}


export const InputField: React.FC<Children> = ({ children }) => {
  const [contacts, setContacts] = useState([
    { name: 'Luis', number: '123456789' },
    { name: 'Bruna', number: '987654321' },
    { name: 'Nenem', number: '456789123' },
  ]);

  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  ); 

  return (
    <React.Fragment>
      <InputFieldContext.Provider value={{ filteredContacts, setFilteredContacts: setContacts }}>
        <div className="flex flex-col bg-white p-3">
          <div className="flex flex-row">
            <div className="flex items-center pointer-events-none text-gray-400"> 
              <FaSearch />
            </div>
      
            <input
              type="tel"
              className="bg-transparent ml-2"
              placeholder="Search for contact by last name..."
              value={search}
              onChange={e => setSearch(e.target.value)} // Update search input value
            />
          </div>
          {children}
        </div>
      </InputFieldContext.Provider>
    </React.Fragment>
  );
};

