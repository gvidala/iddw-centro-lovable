import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { Mail, Phone, Instagram, Dribbble, Github, Twitter } from 'lucide-react';

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription (in a real app, you'd call your backend API)
      console.log('Subscribing user:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter. Stay tuned for updates!",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[rgba(248,249,255,1)] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center px-[50px] py-20 max-md:px-5">
        <div className="w-full max-w-4xl text-center mb-16">
          <h1 className="text-[64px] font-bold text-[rgba(45,45,45,1)] leading-[1.2] mb-6 max-md:text-[48px]">
            Subscribe
          </h1>
          <p className="text-[18px] text-[rgba(45,45,45,0.7)] leading-relaxed mb-12">
            With Anima, you can embed Typeform in just a few steps.
          </p>
          <Button className="bg-[rgba(0,147,121,1)] hover:bg-[rgba(0,127,105,1)] text-white px-[50px] py-[18px] h-[60px] text-base font-semibold rounded-[20px] transition-colors">
            Go to the typeform
          </Button>
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="flex-1">
            <h2 className="text-[48px] font-bold text-[rgba(45,45,45,1)] leading-[1.2] mb-6 max-md:text-[36px]">
              Let's get in touch!
            </h2>
            <p className="text-[16px] text-[rgba(45,45,45,0.7)] leading-relaxed mb-8">
              Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[rgba(0,147,121,1)]">
                <Phone size={20} />
                <span className="text-[16px]">+012 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-[rgba(0,147,121,1)]">
                <Mail size={20} />
                <span className="text-[16px]">Hello@animaapp.com</span>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[rgba(45,45,45,1)] mb-4">
                Connect with us
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(229,244,242,1)] flex items-center justify-center text-[rgba(0,147,121,1)] hover:bg-[rgba(219,239,237,1)] transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[rgba(229,244,242,1)] flex items-center justify-center text-[rgba(0,147,121,1)] hover:bg-[rgba(219,239,237,1)] transition-colors cursor-pointer">
                  <Dribbble size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[rgba(229,244,242,1)] flex items-center justify-center text-[rgba(0,147,121,1)] hover:bg-[rgba(219,239,237,1)] transition-colors cursor-pointer">
                  <Github size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-[rgba(229,244,242,1)] flex items-center justify-center text-[rgba(0,147,121,1)] hover:bg-[rgba(219,239,237,1)] transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Newsletter Form */}
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[rgba(45,45,45,1)] font-semibold">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="h-12 border-[rgba(229,244,242,1)] bg-white focus:border-[rgba(0,147,121,1)] focus:ring-[rgba(0,147,121,0.1)] rounded-[12px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[rgba(45,45,45,1)] font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="h-12 border-[rgba(229,244,242,1)] bg-white focus:border-[rgba(0,147,121,1)] focus:ring-[rgba(0,147,121,0.1)] rounded-[12px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[rgba(0,147,121,1)] hover:bg-[rgba(0,127,105,1)] text-white h-12 text-base font-semibold rounded-[20px] transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(45,45,45,1)] text-white py-8 px-[50px] max-md:px-5">
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
          <p className="text-[14px]">© 2023 Anima's Landing Page UI Kit.</p>
          <div className="flex items-center gap-6">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-white text-sm">▶</span>
            </div>
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Instagram size={16} />
            </div>
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <Github size={16} />
            </div>
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <span className="text-white text-sm">in</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Subscribe;