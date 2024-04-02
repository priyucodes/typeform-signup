import React, { useState } from "react";
import languageIcon from "../assets/languageIcon.svg";
import chevronDown from "../assets/chevronDown.svg";
import blackChevron from "../assets/blackChevron.svg";
import typeformLogo from "../assets/typeformLogo.svg";
import typeformLogoText from "../assets/typeformLogoText.svg";
import ErrorLabel from "./ErrorLabel";
import Eye from "../assets/eye.svg";
import EyeHide from "../assets/eyeHide.svg";

import RadioButton from "./ui/RadioButton";
const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const languages = ["English", "Español"];

const Options = {
  marketing: {
    text: "Get useful tips, inspiration, and offers via e-communication.",
  },
};
const SignupRight = () => {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [checkError, setCheckError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState(languages[0]);

  const [showOptions, setShowOptions] = useState(false);
  const submitForm = e => {
    e.preventDefault();
    if (!email) {
      setEmailError("This field cannot be left blank");
    }
    if (!password) {
      setPasswordError("This field cannot be left blank");
    }
    if (password.length < 8) {
      setPasswordError(
        "Use 8 or more characters with a mix of letters, numbers and symbols"
      );
    }
    if (validateEmail(email) === null) {
      setEmailError("Enter a valid email address");
    }
    if (!isAgreementChecked) {
      setCheckError(
        "Please accept the terms and conditions to finish the signup"
      );
    } else {
      setEmailError(null);
      setPasswordError(null);
      setCheckError(null);
    }
  };
  return (
    <section className='lg:-ml-4 rounded-[16px_0px_0px_16px] p-0 flex-[1_1_10%] grid  h-full relative min-h-[90vh] overflow-hidden w-full bg-transparent'>
      <div className='bg-white w-full relative gridContainer '>
        {/* This is the hidden dropdown */}
        <div className='gridContainer__Head xsMax:row-start-[third] xsMax:row-end-[third] pt-4  pr-0 pb-0 pl-6'>
          <div className='leading-[0] relative'>
            <div
              role='menu'
              className={`bg-white rounded-lg shadow-[rgba(25,25,25,0.12)_0px_2px_5px_0.5px] py-2 px-0 absolute z-[1]  origin-[left_bottom] will-change-[transform,opacity] flex flex-col  top-[2rem] anim ${
                showDropdown
                  ? "visible opacity-100 scale-100 pointer-events-auto"
                  : "invisible opacity-0 pointer-events-none  scale-[0.85]"
              }`}
            >
              {languages.map((lang, index) => {
                return (
                  <div className='' key={index * Math.random()}>
                    <a
                      onClick={e => {
                        e.preventDefault();

                        setLanguage(languages[index]);
                        setShowDropdown(!showDropdown);
                      }}
                      href='/signup/'
                      role='menuitem'
                      data-testid='language-item'
                      className={`outline-none  appearance-none max-w-full text-left text-inherit cursor-pointer min-h-[32px] no-underline w-full m-0 border-[none] flex z-50 ${
                        language === lang ? "bg-[rgb(240,240,240)]" : "bg-white"
                      } `}
                    >
                      <span
                        href='##'
                        className='text-base leading-[2.4] text-[rgb(25,25,25)] font-[200] py-[6px] px-[23px]'
                      >
                        {lang}
                      </span>
                    </a>
                  </div>
                );
              })}

              {/* <a
                href='##'
                onClick={() => {
                  setLanguage(languages[1]);
                }}
                role='menuitem'
                data-testid='language-item'
                className=' appearance-none max-w-full text-left text-inherit cursor-pointer min-h-[32px] bg-[rgb(240,240,240)] no-underline w-full m-0 border-[none]'
              >
                <span
                  href='/es/signup/'
                  className='text-base leading-[2.4] text-[rgb(25,25,25)] font-[200] py-[6px] px-[23px]'
                >
                  Español
                </span>
              </a> */}
            </div>

            <button
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
              className='bg-none border-none p-0 cursor-pointer flex w-24 items-center'
            >
              <div className='mr-2 leading-[0]'>
                <img
                  src={languageIcon}
                  className='h-full w-full'
                  alt='languageIcon'
                />
              </div>
              <span className='!text-[#5e5e5e] text-sm leading-[1.5] font-normal'>
                {language}
              </span>
              <div className='leading-[0] ml-1'>
                <img src={chevronDown} alt='chevronDown' />
              </div>
            </button>
          </div>
        </div>

        {/* actual header */}
        <div className='flex items-center align-middle text-[#3d3d3c] col-[second]  justify-end py-2 px-6 xsMax:justify-stretch'>
          <p className='text-[14px] mt-0 mb-0 ml-0 mr-2'>
            Already have an account?
          </p>
          <div className='xs:w-auto md:gap-2 inline-flex flex-col items-stretch gap-4 bg-transparent min-w-16 max-w-full w-full xsMax:w-full xsMax:flex-1'>
            <a
              href='https://admin.typeform.com/login'
              className='
              inline-block cursor-pointer text-center font-medium text-xs leading-[1.5] text-[#191919] py-[3px] px-[10px] rounded-[6px] border-[1px] border-[#191919] border-solid 
            '
            >
              Log in
            </a>
          </div>
        </div>

        {/* Main */}
        <div className='md:max-w-[542px] flex flex-col max-w-[256px] justify-self-center justify-center items-center col-start-[second] col-end-[second] row-start-[second] row-end-[second] '>
          <div className='flex items-center justify-center h-20 md:max-w-[256px]'>
            <a
              aria-label='Typeform'
              href='/'
              title='Typeform'
              target='_top'
              className='leading-[0] no-underline  text-[100%] m-0 p-0 align-baseline bg-transparent'
            >
              <div className='flex'>
                <img src={typeformLogo} alt='typeformLogo' />
                <span className='ml-[10.21px] overflow-hidden'>
                  <img src={typeformLogoText} alt='typeformLogoText' />
                </span>
              </div>
            </a>
          </div>
          <h2 className='font-[200] text-2xl leading-[36px] text-[#5e5e5e] mb-6 text-center max-w-full  '>
            {/* md:max-w-[256px] */}
            Get better data with conversational forms, surveys, quizzes & more.
          </h2>

          <div className='w-full md:max-w-[256px]'>
            <main className='block'>
              <div>
                <form onSubmit={submitForm} className='block mt-0'>
                  <div className='mb-[15px]'>
                    <div className='mb-[15px]'>
                      <h2 className='hidden mr-0 mt-0 ml-0 mb-5 font-normal'>
                        Get better data with conversational forms, surveys,
                        quizzes & more.
                      </h2>
                      <div className='mb-[15px]'>
                        <span className='w-full h-10 inline-block border border-solid border-[rgb(194,194,193)] rounded-[3px]'>
                          <input
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Email'
                            autoComplete='off'
                            id='email'
                            aria-label='Email'
                            className='h-full w-full m-0 py-[6px] px-2 rounded-[3px] text-base leading-4 border-none'
                          />
                        </span>
                        {emailError && <ErrorLabel error={emailError} />}
                      </div>
                      <div className='mb-[15px]'>
                        <span className='w-full relative h-10 inline-block border border-solid border-[rgb(194,194,193)] rounded-[3px]'>
                          <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type={!isPasswordHidden ? "text" : "password"}
                            minLength={10}
                            maxLength={72}
                            placeholder='Password'
                            autoComplete='off'
                            id='password'
                            aria-label='Password'
                            className='h-full w-full m-0 py-[6px] px-2 rounded-[3px] text-base leading-4 border-none pr-[35px]'
                          />
                          <button
                            onClick={e => {
                              e.preventDefault();
                              setIsPasswordHidden(!isPasswordHidden);
                            }}
                            className='bg-none border-none'
                          >
                            <span className='absolute right-[5px] top-[58%] -translate-y-1/2 w-8 h-8 py-[6px] px-2 opacity-[0.175] cursor-pointer select-none'>
                              <img
                                src={isPasswordHidden ? Eye : EyeHide}
                                alt='eye'
                              />
                            </span>
                          </button>
                        </span>
                        {passwordError && <ErrorLabel error={passwordError} />}
                      </div>
                    </div>
                  </div>

                  {/* Agreement */}
                  <div>
                    <label
                      className='block text-sm leading-[18px] mb-4 pl-[30px] relative text-[rgb(25,25,25)]'
                      htmlFor='terms'
                      id='terms'
                    >
                      <input
                        type='checkbox'
                        id='terms'
                        aria-label='terms'
                        checked={isAgreementChecked}
                        onChange={() => {
                          setIsAgreementChecked(!isAgreementChecked);
                        }}
                        //  appearance-none
                        //  content-[""] text-white w-5 h-5 absolute z-[100] left-0 top-0;
                        className='absolute top-0 left-0 w-5 h-5 m-0    shadow-[rgb(207,207,206)_0px_0px_0px_1px_inset] rounded-[3px] transition-all focus:border-raisin focus:ring-2 focus:ring-black  focus:bg-black accent-black  checked:bg-[#191919]    '
                      ></input>
                      {"I agree to Typeform’s "}
                      <a
                        className='underline text-[rgb(25,25,25)] m-0 p-0'
                        href='https://www.typeform.com/terms-service/'
                      >
                        Terms of Service
                      </a>
                      ,{" "}
                      <a
                        className='underline text-[rgb(25,25,25)] m-0 p-0'
                        href='https://www.typeform.com/terms-service/'
                      >
                        Privacy Policy
                      </a>
                      {" and "}
                      <a
                        className='underline text-[rgb(25,25,25)] m-0 p-0'
                        href='https://www.typeform.com/terms-service/'
                      >
                        Data Processing Agreement
                      </a>
                      .
                    </label>
                    {!isAgreementChecked && checkError && (
                      <div className='block'>
                        <ErrorLabel error={checkError} />
                      </div>
                    )}

                    <div className='pl-[30px] pb-[15px] pt-2'>
                      <div
                        onClick={() => {
                          setShowOptions(!showOptions);
                        }}
                        className='items-center cursor-pointer flex text-sm justify-between leading-[32px] m-0'
                      >
                        <p className='text-[14px] text-[rgb(25,25,25)] m-0'>
                          See options
                        </p>
                        <span
                          className={`transition-all ${
                            !showOptions ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <img src={blackChevron} alt='chevron' />
                        </span>
                      </div>

                      {/* OptionS */}

                      {showOptions && (
                        <div
                          className={`max-h-[306px]  transition-[max-height] duration-200 delay-0 ${
                            !showOptions ? "hidden" : "inline-block"
                          }`}
                        >
                          <div className='overflow-auto'>
                            {/* Toggle Items */}

                            <div>
                              <div className='text-sm mb-2'>
                                <label
                                  className='text-[rgb(25,25,25)] leading-[20px] m-0'
                                  id='marketting'
                                  htmlFor='marketting'
                                >
                                  Get useful tips, inspiration, and offers via
                                  e-communication.
                                </label>
                              </div>

                              {/* Radio container */}
                              <div className='flex items-center mt-0 mb-3 mr-0 ml-0'>
                                {/* label insdie a empty div */}
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='marketting' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      Yes
                                    </p>
                                  </div>
                                </label>
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='marketting' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      No
                                    </p>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div>
                              <div className='text-sm mb-2'>
                                <label
                                  className='text-[rgb(25,25,25)] leading-[20px] m-0'
                                  id='marketting'
                                  htmlFor='marketting'
                                >
                                  Tailor Typeform to my needs based on my
                                  activity.
                                </label>
                                <a
                                  id='tailor_to_needs_agreed'
                                  href='/privacy-policy/'
                                  target='_blank'
                                  rel='noopener'
                                  class='bg-white no-underline text-[rgb(94,94,94)]'
                                >
                                  {" "}
                                  See Privacy Policy
                                </a>
                              </div>

                              {/* Radio container */}
                              <div className='flex items-center mt-0 mb-3 mr-0 ml-0'>
                                {/* label insdie a empty div */}
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='second' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      Yes
                                    </p>
                                  </div>
                                </label>
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='second' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      No
                                    </p>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div>
                              <div className='text-sm mb-2'>
                                <label
                                  className='text-[rgb(25,25,25)] leading-[20px] m-0'
                                  id='marketting'
                                  htmlFor='marketting'
                                >
                                  Enrich my data with select third parties for
                                  more relevant content.
                                </label>
                                <a
                                  id='tailor_to_needs_agreed'
                                  href='/privacy-policy/'
                                  target='_blank'
                                  rel='noopener'
                                  class='bg-white no-underline text-[rgb(94,94,94)]'
                                >
                                  {" "}
                                  See Privacy Policy
                                </a>
                              </div>

                              {/* Radio container */}
                              <div className='flex items-center mt-0 mb-3 mr-0 ml-0'>
                                {/* label insdie a empty div */}
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='third' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      Yes
                                    </p>
                                  </div>
                                </label>
                                <label className='inline-flex cursor-pointer items-center'>
                                  <RadioButton id='third' />
                                  <div className='ml-3'>
                                    <p className='text-sm pt-[2px] mt-0 mr-4 mb-0 ml-0'>
                                      No
                                    </p>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <p className='text-sm m-0 text-[rgb(127,127,127)]'>
                              You can update your preferences in your Profile at
                              any time
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='bsm:max-w-full flex justify-center'>
                    <input
                      type='submit'
                      value={"Create my free account"}
                      className='bg-[#191919] bsm:max-w-[230px] rounded-[3px] border-none text-white cursor-pointer text-base h-10 w-full leading-[1.4] appearance-none p-0'
                    />
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupRight;
