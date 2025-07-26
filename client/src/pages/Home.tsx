import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Users, Award, Calendar, Bell, TrendingUp, MapPin } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed to foster critical thinking and creativity.'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Dedicated teachers with advanced degrees and years of experience.'
    },
    {
      icon: Award,
      title: 'Student Achievements',
      description: 'Proud track record of student success in academics and extracurriculars.'
    },
    {
      icon: TrendingUp,
      title: 'Modern Facilities',
      description: 'State-of-the-art labs, library, and sports facilities for holistic development.'
    }
  ];

  const announcements = [
    {
      title: 'Admission Process 2025 Open',
      date: '2025-01-15',
      content: 'Applications for the new academic year are now being accepted. Apply before March 31st.'
    },
    {
      title: 'Science Fair Winners Announced',
      date: '2025-01-10',
      content: 'Congratulations to our students who won top prizes in the inter-school science competition.'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: '2025-01-05',
      content: 'Monthly PTM scheduled for January 20th. Please confirm your attendance.'
    }
  ];

  const events = [
    {
      date: '2025-01-25',
      title: 'Annual Sports Day',
      time: '9:00 AM'
    },
    {
      date: '2025-02-14',
      title: 'Cultural Festival',
      time: '2:00 PM'
    },
    {
      date: '2025-02-28',
      title: 'Parent Orientation',
      time: '10:00 AM'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">EduCampus</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nurturing minds, building futures. Where excellence meets opportunity in a supportive learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose EduCampus?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing world-class education with a focus on individual growth and community values.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Latest Announcements</h2>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="text-gray-600">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-sm text-green-600 font-medium mb-1">{event.date}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{event.title}</h3>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="block mt-6 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Portals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Access Your Portal</h2>
            <p className="text-gray-600">Quick access to personalized dashboards and resources</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/student-portal"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
                <p className="text-blue-100">Access grades, assignments, and schedules</p>
              </div>
            </Link>
            <Link
              to="/teacher-portal"
              className="group bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-lg text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teacher Portal</h3>
                <p className="text-green-100">Manage classes, upload resources, track progress</p>
              </div>
            </Link>
            <Link
              to="/admin-panel"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Panel</h3>
                <p className="text-purple-100">System management and analytics</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;