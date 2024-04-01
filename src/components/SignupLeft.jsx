import React from "react";

const SignupLeft = () => {
  return (
    <section className='bg-bg flex-1 overflow-hidden relative lg:flex flex-col min-h-[90vh] w-full p-0 hidden'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <h1 className='text-4xl leading-[44px] text-center font-normal text-white  w-[366px] mt-0 mr-0 ml-0 mb-[35px]'>
          Sign up
          <br />
          and come on in
        </h1>
        <div>
          {/*https://www.typeform.com/static/images/signup-page/product-sample@1x.webp  */}
          <picture>
            <source
              srcSet='https://www.typeform.com/static/images/signup-page/product-sample@1x.webp 1x, https://www.typeform.com/static/images/signup-page/product-sample@2x.webp 2x, https://www.typeform.com/static/images/signup-page/product-sample@3x.webp 3x'
              type='image/webp'
            ></source>
            <source
              data-testid='default-source'
              srcSet='https://www.typeform.com/static/images/signup-page/product-sample@1x.webp 1x, https://www.typeform.com/static/images/signup-page/product-sample@2x.webp 2x, https://www.typeform.com/static/images/signup-page/product-sample@3x.webp 3x'
            ></source>
            <img
              alt='Typeform product sample'
              loading='lazy'
              decoding='async'
              fetchpriority='low'
              role='presentation'
              src='https://www.typeform.com/static/images/signup-page/product-sample@3x.webp'
              className='w-full overflow-clip xl3:max-w-[432px]'
            ></img>
          </picture>
        </div>

        <p className='text-white text-sm absolute bottom-6 mt-0 ml-0 mb-5 mr-0'>
          © Typeform
        </p>
      </div>
    </section>
  );
};

export default SignupLeft;
