import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      arbinniroula21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sanagau,Lalitpur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      9840254508
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2 transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <div className="text-green-600 dark:text-green-400 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;