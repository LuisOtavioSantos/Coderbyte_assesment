import React from "react";
import { AddButton } from "./components/buttons/add";
import { Contacts } from "./components/contacts";
import { HeaderTitle } from "./components/header/title";
import { InputField } from "./components/inputs/field";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-[#f6f6f6] h-screen w-screen">

        <header className="mb-[2rem]">
          <HeaderTitle/>
        </header>


        <main className="flex flex-col justify-evenly items-center border-2 border-black h-fit">
          <div className="flex flex-row gap-[12rem] items-center justify-center border-solid border-4 border-red-500">
            <div className="text-[2rem]">
              Contacts
            </div>
            <div className="text-[2rem]">
              <AddButton/>
            </div>
          </div>
          <div className="m-4 border-solid border-4 border-blue-500">
            <InputField>
              <Contacts />
            </InputField>
          </div>

        </main>
      </div>
    </React.Fragment>
  );
}


