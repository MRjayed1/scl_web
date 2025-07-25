import React, { useState } from 'react';
import { BookOpen, Clock, Users, Award, Download, Calendar, Star } from 'lucide-react';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const curricularPrograms = {
    primary: {
      title: 'Primary School (Grades 1-5)',
      description: 'Foundation years focusing on core skills and holistic development',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education', 'Art & Craft', 'Music'],
      features: ['Play-based learning', 'Individual attention', 'Creative activities', 'Character building']
    },
    middle: {
      title: 'Middle School (Grades 6-8)',
      description: 'Transitional phase preparing students for advanced learning',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education', 'Art', 'Music', 'Second Language'],
      features: ['Project-based learning', 'Critical thinking', 'Laboratory experiments', 'Leadership development']
    },
    secondary: {
      title: 'Secondary School (Grades 9-10)',
      description: 'CBSE curriculum preparing for board examinations',
      subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Computer Applications', 'Physical Education', 'Elective Subjects'],
      features: ['Board exam preparation', 'Career guidance', 'Practical assessments', 'Skill development']
    },
    senior: {
      title: 'Senior Secondary (Grades 11-12)',
      description: 'Specialized streams for higher education preparation',
      subjects: ['Science Stream', 'Commerce Stream', 'Arts Stream', 'Computer Science', 'Psychology', 'Economics'],
      features: ['Stream specialization', 'Entrance exam coaching', 'University preparation', 'Research projects']
    }
  };

  const achievements = [
    { title: '95% Board Results', description: 'Consistent high performance in CBSE examinations' },
    { title: 'Science Olympiad Winners', description: 'Multiple state and national level winners' },
    { title: 'Creative Writing Awards', description: 'Students published in national magazines' },
    { title: 'Sports Champions', description: 'Inter-school and district level victories' }
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Over 10,000 books, digital resources, and quiet study spaces'
    },
    {
      icon: Users,
      title: 'Science Labs',
      description: 'Fully equipped Physics, Chemistry, Biology, and Computer labs'
    },
    {
      icon: Award,
      title: 'Activity Centers',
      description: 'Music room, art studio, dance hall, and sports facilities'
    },
    {
      icon: Clock,
      title: 'Smart Classrooms',
      description: 'Interactive whiteboards and multimedia learning tools'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive curriculum designed to nurture critical thinking, creativity, 
              and character development in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Age-appropriate learning programs designed to challenge and inspire students at every level.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {Object.entries(curricularPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === key
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {program.title.split(' ')[0]} School
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {curricularPrograms[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {curricularPrograms[activeTab].description}
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {curricularPrograms[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Subjects Offered:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {curricularPrograms[activeTab].subjects.map((subject, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                      <span className="text-gray-700 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Resources</h2>
            <p className="text-gray-600">Download syllabi, exam schedules, and study materials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Syllabus & Curriculum</h3>
                <Download className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-gray-600 mb-4">Complete curriculum guides for all grades</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Exam Schedule</h3>
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-gray-600 mb-4">Upcoming test and examination dates</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Schedule
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Study Materials</h3>
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-gray-600 mb-4">Additional resources and practice papers</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                Access Library
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Learning Facilities</h2>
            <p className="text-gray-600">State-of-the-art infrastructure supporting modern education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Achievements</h2>
            <p className="text-gray-600">Celebrating our students' outstanding accomplishments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{achievement.title}</div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Teaching Methodology</h2>
              <p className="text-gray-600 mb-6">
                We employ innovative teaching methods that combine traditional wisdom with modern pedagogical approaches 
                to ensure every student reaches their full potential.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Interactive Learning</h4>
                    <p className="text-gray-600 text-sm">Engaging classroom activities and discussions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Personalized Attention</h4>
                    <p className="text-gray-600 text-sm">Small class sizes ensuring individual focus</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Technology Integration</h4>
                    <p className="text-gray-600 text-sm">Smart boards and digital learning tools</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Assessment Methods</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold">Continuous Assessment</h4>
                  <p className="text-sm text-gray-600">Regular quizzes and assignments throughout the term</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold">Project-Based Evaluation</h4>
                  <p className="text-sm text-gray-600">Hands-on projects demonstrating practical application</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold">Comprehensive Exams</h4>
                  <p className="text-sm text-gray-600">Periodic examinations following CBSE guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;