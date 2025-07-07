import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="justify-center items-center shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] backdrop-blur-[13px] flex w-full gap-[40px_200px] bg-[#F8F9FF] px-[55px] max-md:max-w-full max-md:px-5">
      <div className="items-stretch self-stretch flex min-w-60 w-full flex-col flex-1 shrink basis-[0%] bg-[#E5F4F2] my-auto px-[120px] py-[60px] rounded-[20px] max-md:max-w-full max-md:px-5">
        <div className="w-full overflow-hidden text-[#2D2D2D] text-center max-md:max-w-full">
          <h2 className="text-[#2D2D2D] text-[38px] font-bold leading-[1.3] tracking-[-0.95px] max-md:max-w-full">
            Subscribe now
          </h2>
          <p className="text-[#2D2D2D] text-base font-normal leading-[1.4] mt-5 max-md:max-w-full">
            Never miss a beat on new landing page designs and features.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="items-center self-center flex min-h-[60px] w-[450px] max-w-full gap-3 text-base bg-white mt-10 pl-5 rounded-[20px] border-2 border-solid border-white">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            required
            disabled={isSubmitting}
            className="text-[#2B2B2B] font-normal self-stretch flex-1 shrink basis-[100px] my-auto bg-transparent border-none outline-none placeholder-[#2B2B2B]"
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-[rgba(0,147,121,1)] self-stretch flex min-h-[60px] items-center gap-2 text-white font-semibold whitespace-nowrap text-center justify-center my-auto px-[50px] py-[18px] rounded-[20px] max-md:px-5 hover:bg-[rgba(0,127,105,1)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/97d9ded634ec40d18877fc631e7e66a8/910a42e09d4cd11de44736194ce2b20d9e91be8f?placeholderIfAbsent=true"
              alt="Subscribe icon"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <div className="text-white self-stretch my-auto">
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </div>
          </button>
        </form>
        {message && (
          <div className={`text-center mt-4 ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
