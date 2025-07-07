import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Features from '@/components/Features';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(248,249,255,1)] flex flex-col overflow-hidden items-stretch">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Metrics />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
