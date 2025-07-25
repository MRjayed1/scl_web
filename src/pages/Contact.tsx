import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Street', 'Academic City, AC 12345', 'United States'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Toll-free: 1-800-EDU-CAMP'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@educampus.edu', 'admissions@educampus.edu', 'support@educampus.edu'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const departments = [
    { name: 'Admissions Office', email: 'admissions@educampus.edu', phone: '+1 (555) 123-4567' },
    { name: 'Academic Affairs', email: 'academics@educampus.edu', phone: '+1 (555) 123-4568' },
    { name: 'Student Services', email: 'students@educampus.edu', phone: '+1 (555) 123-4569' },
    { name: 'Finance Office', email: 'finance@educampus.edu', phone: '+1 (555) 123-4570' },
    { name: 'IT Support', email: 'support@educampus.edu', phone: '+1 (555) 123-4571' },
    { name: 'Transportation', email: 'transport@educampus.edu', phone: '+1 (555) 123-4572' }
  ];

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Admission requirements vary by grade level. Please visit our Admissions page for detailed information.'
    },
    {
      question: 'Do you provide transportation?',
      answer: 'Yes, we offer school bus services covering major areas of the city. Contact our transportation office for routes and fees.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain a 12:1 student-teacher ratio to ensure personalized attention for every student.'
    },
    {
      question: 'Are scholarships available?',
      answer: 'Yes, we offer merit-based and need-based scholarships. Please check our Admissions page for details.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to answer your questions and help you begin your journey with EduCampus. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                    <Icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="fees">Fees & Finance</option>
                      <option value="transport">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              {/* Interactive Map Placeholder */}
              <div className="bg-gray-300 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Education Street, Academic City, AC 12345</p>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">info@educampus.edu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">WhatsApp: +1 (555) 999-8888</span>
                  </div>
                </div>
              </div>
              
              {/* Schedule Visit */}
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                  Schedule a Campus Tour
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience our campus firsthand. Schedule a guided tour to explore our facilities and meet our faculty.
                </p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Department Contacts</h2>
            <p className="text-gray-600">Direct contact information for specific departments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a href={`mailto:${dept.email}`} className="text-teal-600 hover:underline text-sm">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <a href={`tel:${dept.phone}`} className="text-teal-600 hover:underline text-sm">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;