import React, { createContext, useState } from 'react';

interface Contact {
  name: string;
  number: string;
}

interface ContactsContextProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  editContact: (index: number, updatedContact: Contact) => void;
  removeContact: (index: number) => void;
}

interface Children { 
  children: React.ReactNode
}

export const ContactsContext = createContext<ContactsContextProps>({
  contacts: [],
  addContact: () => {},
  editContact: () => {},
  removeContact: () => {},
});

export const ContactsProvider: React.FC<Children> = ({ children }) => {

  const [contacts, setContacts] = useState<Contact[]>([
    { name: 'Me', number: '123456789' },
    { name: 'My wife', number: '987654321' },
    { name: 'and kids', number: '456789123' },
  ]);


  // const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (index: number, updatedContact: Contact) => {
    setContacts(contacts.map((contact, i) => (i === index ? updatedContact : contact)));
  };

  const removeContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, editContact, removeContact }}>
      {children}
    </ContactsContext.Provider>
  );
};