export const Footer = () => {
  return (
    <section className='w-full px-4 md:px-16 lg:px-32 py-16 lg:py-24 flex flex-col justify-center bg-upGreen'>
      <form
        target='_blank'
        action='https://formsubmit.co/vabadalin@gmail.com'
        method='POST'
      >
        <h1 className='font-recoletaBl text-5xl text-le text-background mb-4'>
          Send a Message
        </h1>
        <div className='flex flex-col lg:flex-row lg:gap-8'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            className='rounded-full py-2 px-4 mt-4 w-full lg:w-1/2'
          />
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Your email is optional'
            className='rounded-full py-2 px-4 mt-4 w-full lg:w-1/2'
          />
        </div>
        <textarea
          id='message'
          name='message'
          placeholder='Your message for me'
          rows={5}
          className='rounded-3xl py-2 px-4 mt-4 w-full'
        />
        <div className='flex justify-end mt-4'>
          <input
            type='submit'
            value='Send Message'
            className='w-auto h-auto px-6 py-2 border-2 border-background rounded-full font-openSans font-bold text-sm text-background hover:bg-background hover:text-upGreen cursor-pointer'
          />
        </div>
      </form>
    </section>
  );
};
