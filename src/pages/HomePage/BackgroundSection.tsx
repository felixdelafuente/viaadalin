export const BackgroundSection = () => {
  return (
    <section className='relative w-full px-4 md:px-16 lg:px-32 pt-4 md:pt-16 lg:pt-32 flex flex-col items-center overflow-hidden'>
      <img
        src='public/images/up-stripes.png'
        alt=''
        className='z-20 hidden xl:block absolute right-0 -top-48 transform -rotate-45'
      />
      <h1 className='font-recoletaBl text-5xl text-black mt-12'>
        My Background
      </h1>
      <div className='w-full mt-24 flex flex-col md:flex-row md:justify-center gap-8'>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center'>
          <img
            src='public/images/rot-1.png'
            alt='First Rotation'
            className='mb-4'
          />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Lorem Ipsum School
          </h4>
          <p className='text-sm text-center font-openSans'>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center'>
          <img
            src='public/images/rot-2.png'
            alt='Second Rotation'
            className='mb-4'
          />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Lorem Ipsum School
          </h4>
          <p className='text-sm text-center font-openSans'>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center'>
          <img
            src='public/images/rot-0.png'
            alt='Coming Soon'
            className='mb-4'
          />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Lorem Ipsum School
          </h4>
          <p className='text-sm text-center font-openSans'>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center'>
          <img
            src='public/images/rot-0.png'
            alt='Coming Soon'
            className='mb-4'
          />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Lorem Ipsum School
          </h4>
          <p className='text-sm text-center font-openSans'>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </section>
  );
};
