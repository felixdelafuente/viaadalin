export const BackgroundSection = () => {
  return (
    <section className='relative w-full px-4 md:px-16 lg:px-32 pt-4 md:pt-16 lg:pt-32 flex flex-col items-center overflow-hidden'>
      <img
        src='/images/up-stripes.png'
        alt=''
        className='z-20 hidden xl:block absolute right-0 -top-48 transform -rotate-45'
      />
      <h1 className='font-recoletaBl text-5xl text-black mt-12'>
        My Background
      </h1>
      <div className='w-full mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='w-full flex flex-col items-center'>
          <img src='/images/rot-1.png' alt='First Rotation' className='mb-4' />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Clinic for Therapy Services
          </h4>
          <p className='text-sm text-center font-openSans'>
            The pediatric section of the UPM CAMP in-house outpatient clinic
          </p>
        </div>
        <div className='w-full flex flex-col items-center'>
          <img src='/images/rot-2.png' alt='Second Rotation' className='mb-4' />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Clinic for Therapy Services
          </h4>
          <p className='text-sm text-center font-openSans'>
            The adolescent and adults section of the UPM CAMP in-house
            outpatient clinic
          </p>
        </div>
        <div className='w-full flex flex-col items-center'>
          <img src='/images/rot-0.png' alt='Coming Soon' className='mb-4' />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Third Rotation Coming Soon!
          </h4>
          <p className='text-sm text-center font-openSans'>
            {/* Insert third rotation update here */}
          </p>
        </div>
        <div className='w-full flex flex-col items-center'>
          <img src='/images/rot-0.png' alt='Coming Soon' className='mb-4' />
          <h4 className='text-2xl text-center font-recoletaBl'>
            Fourth Rotation Coming Soon!
          </h4>
          <p className='text-sm text-center font-openSans'>
            {/* Insert fourth rotation update here */}
          </p>
        </div>
      </div>
    </section>
  );
};
