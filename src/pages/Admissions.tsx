import React, { useState } from 'react';
import { FileText, Calendar, DollarSign, CheckCircle, AlertCircle, Download, Upload } from 'lucide-react';

const Admissions = () => {
  const [selectedGrade, setSelectedGrade] = useState('nursery');

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete and submit the online application form with required documents',
      icon: FileText,
      status: 'current'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit original documents for verification at the school office',
      icon: CheckCircle,
      status: 'upcoming'
    },
    {
      step: 3,
      title: 'Interaction/Assessment',
      description: 'Child and parent interaction session (for applicable grades)',
      icon: Calendar,
      status: 'upcoming'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Pay admission and first term fees upon selection',
      icon: DollarSign,
      status: 'upcoming'
    }
  ];

  const gradeInfo = {
    nursery: {
      title: 'Nursery (Age 3-4)',
      eligibility: 'Child should be 3+ years old as of March 31st',
      fees: '$500 per term',
      requirements: ['Birth Certificate', 'Vaccination Record', 'Recent Photographs', 'Parent ID Proof']
    },
    kg: {
      title: 'Kindergarten (Age 4-6)',
      eligibility: 'Child should be 4+ years old as of March 31st',
      fees: '$600 per term',
      requirements: ['Birth Certificate', 'Previous School Record', 'Vaccination Record', 'Recent Photographs', 'Parent ID Proof']
    },
    primary: {
      title: 'Primary (Grades 1-5)',
      eligibility: 'Age appropriate for the grade with basic literacy',
      fees: '$800 per term',
      requirements: ['Birth Certificate', 'Transfer Certificate', 'Previous Grade Report Card', 'Character Certificate', 'Recent Photographs']
    },
    middle: {
      title: 'Middle School (Grades 6-8)',
      eligibility: 'Completed previous grade with minimum 60% marks',
      fees: '$1000 per term',
      requirements: ['Birth Certificate', 'Transfer Certificate', 'Grade Report Cards', 'Character Certificate', 'Migration Certificate (if applicable)']
    },
    secondary: {
      title: 'Secondary (Grades 9-10)',
      eligibility: 'Completed Grade 8 with minimum 65% marks',
      fees: '$1200 per term',
      requirements: ['Birth Certificate', 'Transfer Certificate', 'Grade 8 Report Card', 'Character Certificate', 'Migration Certificate']
    }
  };

  const importantDates = [
    { event: 'Application Form Release', date: 'December 1, 2024', status: 'completed' },
    { event: 'Last Date for Submission', date: 'March 31, 2025', status: 'current' },
    { event: 'Document Verification', date: 'April 5-15, 2025', status: 'upcoming' },
    { event: 'Interaction/Assessment', date: 'April 20-30, 2025', status: 'upcoming' },
    { event: 'Results Declaration', date: 'May 10, 2025', status: 'upcoming' },
    { event: 'Admission Confirmation', date: 'May 15-25, 2025', status: 'upcoming' }
  ];

  const scholarships = [
    {
      title: 'Academic Excellence Scholarship',
      description: 'For students with outstanding academic performance',
      amount: 'Up to 50% tuition waiver',
      criteria: 'Minimum 90% in previous grade'
    },
    {
      title: 'Sports Scholarship',
      description: 'For students excelling in sports and athletics',
      amount: 'Up to 30% tuition waiver',
      criteria: 'State/National level sports achievements'
    },
    {
      title: 'Need-Based Financial Aid',
      description: 'For economically disadvantaged families',
      amount: 'Up to 75% tuition waiver',
      criteria: 'Family income below specified threshold'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions 2025-26</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join our community of learners and embark on a journey of academic excellence and personal growth.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process to ensure smooth admission for your child.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="relative">
                  <div className={`p-6 rounded-lg border-2 ${
                    process.status === 'current' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      process.status === 'current' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">Step {process.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                  {index < admissionProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grade-wise Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Grade-wise Information</h2>
            <p className="text-gray-600">Select a grade to view specific requirements and fees</p>
          </div>
          
          {/* Grade Selection */}
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {Object.entries(gradeInfo).map(([key, grade]) => (
              <button
                key={key}
                onClick={() => setSelectedGrade(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 mb-2 ${
                  selectedGrade === key
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {grade.title.split(' ')[0]}
              </button>
            ))}
          </div>
          
          {/* Grade Details */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {gradeInfo[selectedGrade].title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Eligibility Criteria:</h4>
                    <p className="text-gray-600">{gradeInfo[selectedGrade].eligibility}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Fees:</h4>
                    <p className="text-green-600 font-semibold">{gradeInfo[selectedGrade].fees}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-4">Required Documents:</h4>
                <ul className="space-y-2">
                  {gradeInfo[selectedGrade].requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Important Dates</h2>
            <p className="text-gray-600">Stay updated with admission timeline and deadlines</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {importantDates.map((date, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg mb-4 ${
                date.status === 'current' ? 'bg-purple-50 border-l-4 border-purple-500' :
                date.status === 'completed' ? 'bg-green-50 border-l-4 border-green-500' :
                'bg-gray-50 border-l-4 border-gray-300'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  date.status === 'current' ? 'bg-purple-500' :
                  date.status === 'completed' ? 'bg-green-500' :
                  'bg-gray-300'
                }`}></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{date.event}</h3>
                  <p className="text-gray-600">{date.date}</p>
                </div>
                {date.status === 'current' && (
                  <AlertCircle className="h-5 w-5 text-purple-500" />
                )}
                {date.status === 'completed' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-gray-600">Supporting deserving students with financial assistance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">{scholarship.title}</h3>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Amount: </span>
                  <span className="font-semibold text-green-600">{scholarship.amount}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Criteria: </span>
                  {scholarship.criteria}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Application Forms</h2>
            <p className="text-gray-600">Download forms and submit your application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg text-center">
              <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Download Application Form</h3>
              <p className="text-gray-600 mb-6">Get the admission form for offline submission</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                Download PDF
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-teal-100 p-8 rounded-lg text-center">
              <Upload className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Online Application</h3>
              <p className="text-gray-600 mb-6">Fill and submit your application online</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
                Apply Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Admission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our admission counselors are here to guide you through the process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>admissions@educampus.edu</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p>Mon-Fri: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;