
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/ month',
      description: 'Best for Small Teams or Individuals.',
      features: [
        'Write feature details here',
        'Write feature details here',
        'Write feature details here'
      ],
      isPopular: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/ month',
      description: 'Ideal for Growing Companies.',
      features: [
        'Write feature details here',
        'Write feature details here',
        'Write feature details here'
      ],
      isPopular: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: '/ month',
      description: 'Ultimate for Enterprise Solutions.',
      features: [
        'Write feature details here',
        'Write feature details here',
        'Write feature details here'
      ],
      isPopular: true,
      buttonText: 'Get Started',
      buttonVariant: 'default' as const
    }
  ];

  return (
    <div className="bg-[rgba(248,249,255,1)] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="text-center py-20 px-[50px] max-md:px-5">
        <h1 className="text-[64px] font-bold text-[rgba(45,45,45,1)] leading-[1.1] mb-6 max-md:text-[48px]">
          Pricing
        </h1>
        <p className="text-lg text-[rgba(45,45,45,0.7)] mb-12 max-w-2xl mx-auto">
          With Anima, you can embed Typeform in just a few steps.
        </p>
        <Button className="bg-[rgba(0,147,121,1)] hover:bg-[rgba(0,127,105,1)] text-white px-8 py-4 text-lg font-semibold rounded-[20px] mb-20">
          Go to the typeform
        </Button>
      </section>

      {/* Pricing Plans Section */}
      <section className="px-[50px] pb-20 max-md:px-5">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[rgba(45,45,45,1)] leading-[1.2] mb-6 max-md:text-[36px]">
            Pick Your Perfect Plan
          </h2>
          <p className="text-lg text-[rgba(45,45,45,0.7)] max-w-2xl mx-auto">
            Find the perfect plan for your business with our flexible pricing options.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-[20px] p-8 shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] border ${
                plan.isPopular 
                  ? 'bg-[rgba(0,147,121,1)] text-white border-[rgba(0,147,121,1)]' 
                  : 'border-[#E5F4F2]'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-[rgba(45,45,45,1)]'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className={`text-[48px] font-bold ${plan.isPopular ? 'text-white' : 'text-[rgba(45,45,45,1)]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-2 ${plan.isPopular ? 'text-white/80' : 'text-[rgba(45,45,45,0.7)]'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-base ${plan.isPopular ? 'text-white/90' : 'text-[rgba(45,45,45,0.7)]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-[rgba(0,147,121,1)]'}`} />
                    <span className={`${plan.isPopular ? 'text-white' : 'text-[rgba(45,45,45,1)]'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-12 text-base font-semibold rounded-[20px] transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-[rgba(0,147,121,1)] hover:bg-gray-100'
                    : 'bg-[rgba(229,244,242,1)] text-[rgba(0,147,121,1)] hover:bg-[rgba(219,239,237,1)]'
                }`}
                variant={plan.isPopular ? 'default' : 'outline'}
              >
                {plan.buttonText}
                {plan.isPopular && <span className="ml-2">→</span>}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(45,45,45,1)] text-white py-8 px-[50px] max-md:px-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm">© 2023 Anima's Landing Page UI Kit.</p>
          <div className="flex gap-4">
            {/* Social media icons would go here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
