export const AboutSection = () => {
  return (
    <section className='z-30 relative px-4 md:px-16 lg:px-32 py-16 lg:py-32 bg-upMaroon w-full flex lg:gap-36 flex-col-reverse lg:flex-row'>
      <div className='w-full lg:w-2/3'>
        <h1 className='font-recoletaBl text-5xl text-background mt-12'>
          About Me
        </h1>
        <p className='font-openSans text-base md:text-lg lg:text-xl text-background'>
          <br />
          Hello! I'm Via Adalin and I'm currently a BS Speech Pathology Intern
          at the University of the Philippines Manila College of Allied Medical
          Professionals (UPM CAMP).
          <br />
          <br />
          I'm from a not so small city in Mindanao called Koronadal City. Truth
          be told, being a Speech-Language Pathologist (SLP) wasn't by childhood
          dream but I sure am glad I got to learn more about this profession and
          experience what it has to offer.
          <br />
          <br />
          Unfortunately, there are a lot of misconceptions about SLPs or they
          have no idea what SLP is! This is especially true in my hometown. With
          that, this page was created! Join me in this journey of advocacy and
          self-discovery!
        </p>
      </div>
      <div className='w-full lg:w-1/3 flex justify-center lg:justify-end'>
        <img
          src='public/images/about-img.png'
          alt='Via Adalin'
          className='w-96 md:w-1/2 lg:w-auto drop-shadow-lg hover:-translate-y-1'
        />
      </div>
    </section>
  );
};
