import React from 'react';
import { Users, Target, Award, MapPin, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '1500+', label: 'Students' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Faculty' },
    { number: '25+', label: 'Years of Excellence' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Committed to maintaining the highest standards in education and student achievement.'
    },
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'Fostering intellectual, emotional, and social growth in every student.'
    },
    {
      icon: Award,
      title: 'Character Building',
      description: 'Instilling values of integrity, respect, and responsibility in our students.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to be global citizens with cultural awareness and understanding.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduCampus</h1>
            <p className="text-xl max-w-3xl mx-auto">
              For over 25 years, we have been dedicated to providing exceptional education 
              and nurturing the next generation of leaders, thinkers, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary for success in an ever-changing world. We strive to create a nurturing 
                environment where every student can reach their full potential and become responsible 
                global citizens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading educational institution recognized for academic excellence, 
                innovative teaching methods, and character development. We envision a future where 
                our graduates contribute meaningfully to society and lead positive change in their 
                communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the culture of our institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our History</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Founded in 1999</h3>
                    <p className="text-gray-600">Started as a small institution with just 50 students and 5 teachers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Expansion in 2010</h3>
                    <p className="text-gray-600">Added new buildings, laboratories, and expanded curriculum offerings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Digital Transformation 2020</h3>
                    <p className="text-gray-600">Implemented modern technology and online learning platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Principal's Message</h3>
              <p className="text-gray-600 mb-4">
                "Welcome to EduCampus, where we believe every student has the potential to excel. 
                Our dedicated faculty and staff work tirelessly to provide an environment that 
                challenges, supports, and inspires our students to achieve their dreams."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold">Dr. Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Accreditation & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              EduCampus is proud to be accredited by leading educational bodies and recognized 
              for our commitment to academic excellence and quality education.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">CBSE</div>
                <p className="text-sm text-gray-600">Affiliated with Central Board of Secondary Education</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">ISO</div>
                <p className="text-sm text-gray-600">ISO 9001:2015 Certified for Quality Management</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">NAAC</div>
                <p className="text-sm text-gray-600">A+ Grade from National Assessment and Accreditation Council</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">GREEN</div>
                <p className="text-sm text-gray-600">Green School Certification for Environmental Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;