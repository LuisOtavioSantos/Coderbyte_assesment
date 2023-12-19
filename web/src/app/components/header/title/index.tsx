import React from 'react';
import { BiSolidContact } from 'react-icons/bi';

export const HeaderTitle = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row items-center justify-center gap-4 text-[6rem] m-0 p-0">
        <div className="">
          <BiSolidContact />
        </div>
        <div className=''>
          Phone Book App
        </div>
      </div>
    </React.Fragment>
  );
};


      