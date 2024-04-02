import React from "react";

const RadioButton = ({ id, val, setVal }) => {
  return (
    <input
      aria-labelledby={id}
      data-testid={id}
      name={id}
      id={id}
      // appearance-none
      className='w-5 h-5 mr-[3px] ml-[3px]  cursor-pointer  rounded-[50%] mb-0 mt-0 outline-none transition-all duration-200 bg-white border border-solid border-[rgb(194,194,193)] appearance-none  checked:bg-white checked:border-[6px] checked:border-solid checked:border-[rgb(25,25,25)]'
      //  focus:ring-2 focus:ring-black  focus:bg-black accent-white checked:bg-white appearance-none
      type='radio'
      value=''
    ></input>
  );
};

export default RadioButton;
