'use client';
import React from "react";
import { AddButton } from "./components/buttons/add";
import { Contacts } from "./components/contacts";
import { ContactsProvider } from "./components/contexts/contacts";
import { HeaderTitle } from "./components/header/title";
import { InputField } from "./components/inputs/field";

export default function Home() {
  return (
    <React.Fragment>
      <ContactsProvider>
      <div className="bg-[#f6f6f6] h-screen w-screen flex flex-1 flex-col items-center justify-center">

        <header className="mb-[2rem]">
          <HeaderTitle/>
        </header>


        <main className="flex flex-col items-center w-[80%]">
          <section className="flex justify-between w-fit md:w-9/10 lg:w-3/4 xl:w-3/4">            
            <div className="text-[2rem] m-0">
              Contacts
            </div>
            <div className="text-[2rem] m-0">
              <AddButton/>
            </div>
          </section>
          <section className="flex flex-row items-center justify-center w-full md:w-9/10 lg:w-3/4 xl:w-3/4">            
          <div className="flex-grow flex-1 bg-transparent">

            <InputField>
              <Contacts />
            </InputField>
            
            </div>
          </section>

        </main>
      </div>
      </ContactsProvider>
    </React.Fragment>
  );
}