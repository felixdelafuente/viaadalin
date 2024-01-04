import ReactCurvedText from "react-curved-text";

export const HeaderSection = () => {
  return (
    <section
      className='w-full h-screen relative bg-cover bg-center bg-no-repeat -z-10 flex flex-col items-center justify-end overflow-hidden'
      style={{ backgroundImage: `url("public/images/header-bg.jpg")` }}
    >
      <div className='absolute inset-0 bg-background opacity-80 w-full h-full z-10'></div>
      <h1 className='z-20 font-recoletaBl font-black text-5xl md:text-7xl block mt-40 mb-10 lg:hidden'>
        Hello, I am Via!
      </h1>
      <ReactCurvedText
        width={530}
        height={125}
        cx={250}
        cy={250}
        rx={360}
        ry={180}
        startOffset={195}
        reversed={true}
        text='Hello, I am Via!'
        textProps={{ className: "shadow-lg" }}
        textPathProps={{ className: "shadow-lg" }}
        svgProps={{
          className: "z-20 font-recoletaBl fill-black text-7xl hidden lg:block",
        }}
      />
      <img
        src='public/images/up-stripes.png'
        alt=''
        className='z-20 hidden xl:block absolute right-24 -top-24 transform -rotate-45'
      />
      <img
        src='public/images/up-stripes.png'
        alt=''
        className='z-20 hidden xl:block absolute left-16 -bottom-24 transform -rotate-45 scale-x-[-1]'
      />
      <img
        src='public/images/header-img.png'
        alt='Via Adalin'
        className='z-20 -mb-28 mr-4 w-auto h-3/4 lg:h-5/6'
      />
      <h2 className='z-20 hidden md:block absolute md:bottom-80 md:right-10 md:text-lg lg:right-80 xl:right-96 lg:text-xl text-center font-caveat leading-tight transform rotate-12'>
        I am a Speech-Language Pathology Intern
        <br />
        at the University of the Philippines Manila
        <br />
        and I'll be sharing my college
        <br />
        and internship journey here!
      </h2>
    </section>
  );
};
