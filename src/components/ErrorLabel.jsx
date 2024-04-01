import React from "react";

const ErrorLabel = ({ error }) => {
  return (
    <div className='flex items-center relative '>
      <span className='text-[rgb(193,59,47)] text-sm leading-[1.5]'>
        <img
          src='https://www.typeform.com/static/signup-page/warning.svg'
          alt='error'
          className='absolute w-[14px] h-[14px] top-1'
        />
      </span>
      <p className='text-[rgb(193,59,47)] text-sm leading-[1.5] m-0 pt-2 pr-0 pb-[6px] pl-[20px] relative -top-1'>
        This field cannot be left blank{error}
      </p>
    </div>
  );
};

export default ErrorLabel;
