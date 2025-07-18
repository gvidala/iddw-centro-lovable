
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // Simulate email sending (in a real app, you'd call your backend API)
      console.log('Sending email with form data:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        comment: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[rgba(248,249,255,1)] min-h-screen flex flex-col">
      <Navbar />

      {/* Contact Section */}
      <main className="flex-1 flex items-center justify-center px-[50px] py-20 max-md:px-5">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-[48px] font-bold text-[rgba(45,45,45,1)] leading-[1.2] mb-6 max-md:text-[36px]">
              Get In Touch
            </h1>
            <p className="text-lg text-[rgba(45,45,45,0.7)] leading-relaxed">
              Have questions or want to learn more? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] border border-[#E5F4F2] p-10 max-md:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[rgba(45,45,45,1)] font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="h-12 border-[#E5F4F2] focus:border-[rgba(0,147,121,1)] focus:ring-[rgba(0,147,121,0.1)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[rgba(45,45,45,1)] font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="h-12 border-[#E5F4F2] focus:border-[rgba(0,147,121,1)] focus:ring-[rgba(0,147,121,0.1)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment" className="text-[rgba(45,45,45,1)] font-semibold">
                  Message
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or ask us a question..."
                  required
                  rows={6}
                  className="border-[#E5F4F2] focus:border-[rgba(0,147,121,1)] focus:ring-[rgba(0,147,121,0.1)] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[rgba(0,147,121,1)] hover:bg-[rgba(0,127,105,1)] text-white h-12 text-base font-semibold rounded-[20px] transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
