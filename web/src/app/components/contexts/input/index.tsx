'use client';
import React from 'react';

interface Contact {
  name: string;
  number: string;
}

interface InputFieldContextProps {
  filteredContacts: Contact[];
  // setFilteredContacts: (contacts: Contact[]) => void;
}

export const InputFieldContext = React.createContext<InputFieldContextProps>({
  filteredContacts: [],
  // setFilteredContacts: () => {},
});