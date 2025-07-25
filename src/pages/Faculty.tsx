import React, { useState } from 'react';
import { Users, Award, BookOpen, Mail, Phone, Linkedin, GraduationCap, Star } from 'lucide-react';

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Faculty' },
    { id: 'english', name: 'English' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Science' },
    { id: 'social', name: 'Social Studies' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'sports', name: 'Physical Education' }
  ];

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Principal & Head of Administration',
      department: 'administration',
      qualification: 'Ph.D. in Educational Leadership, M.Ed.',
      experience: '25 years',
      specialization: 'Educational Administration, Curriculum Development',
      email: 'sarah.johnson@educampus.edu',
      phone: '+1 (555) 123-4567',
      bio: 'Dr. Johnson brings over two decades of experience in educational leadership and has transformed multiple institutions.',
      achievements: ['Best Principal Award 2023', 'Educational Excellence Recognition', 'Community Leadership Award'],
      subjects: ['Educational Leadership'],
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      position: 'Head of Mathematics Department',
      department: 'mathematics',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '18 years',
      specialization: 'Advanced Mathematics, Competitive Exam Preparation',
      email: 'michael.chen@educampus.edu',
      phone: '+1 (555) 123-4568',
      bio: 'Professor Chen is renowned for his innovative teaching methods and has helped numerous students excel in mathematics.',
      achievements: ['Math Olympiad Coach', 'Best Teacher Award 2022', 'Published 15+ research papers'],
      subjects: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      position: 'Senior English Teacher',
      department: 'english',
      qualification: 'M.A. English Literature, B.Ed.',
      experience: '15 years',
      specialization: 'Creative Writing, Literature Analysis, Communication Skills',
      email: 'emily.rodriguez@educampus.edu',
      phone: '+1 (555) 123-4569',
      bio: 'Ms. Rodriguez has a passion for nurturing young writers and has published several educational materials.',
      achievements: ['Outstanding Teacher Award', 'Published Author', 'Literary Society President'],
      subjects: ['English Language', 'Literature', 'Creative Writing', 'Public Speaking'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Dr. Robert Kim',
      position: 'Head of Science Department',
      department: 'science',
      qualification: 'Ph.D. in Physics, M.Sc. Physics',
      experience: '20 years',
      specialization: 'Physics, Quantum Mechanics, Research Methodology',
      email: 'robert.kim@educampus.edu',
      phone: '+1 (555) 123-4570',
      bio: 'Dr. Kim combines theoretical knowledge with practical applications, making science accessible and exciting.',
      achievements: ['Science Fair Judge', 'Research Publication Awards', 'Innovation in Teaching Award'],
      subjects: ['Physics', 'Chemistry', 'Research Methods', 'Lab Sciences'],
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Ms. Lisa Thompson',
      position: 'Social Studies Coordinator',
      department: 'social',
      qualification: 'M.A. History, B.Ed.',
      experience: '12 years',
      specialization: 'World History, Geography, Civic Education',
      email: 'lisa.thompson@educampus.edu',
      phone: '+1 (555) 123-4571',
      bio: 'Ms. Thompson brings history to life through interactive teaching methods and real-world connections.',
      achievements: ['Heritage Project Leader', 'Community Service Award', 'Historical Society Member'],
      subjects: ['History', 'Geography', 'Civics', 'Social Sciences'],
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      name: 'Mr. David Anderson',
      position: 'Arts & Music Teacher',
      department: 'arts',
      qualification: 'M.F.A. Visual Arts, Diploma in Music',
      experience: '14 years',
      specialization: 'Visual Arts, Music Composition, Creative Expression',
      email: 'david.anderson@educampus.edu',
      phone: '+1 (555) 123-4572',
      bio: 'Mr. Anderson nurtures creativity and artistic expression, helping students discover their artistic potential.',
      achievements: ['Art Exhibition Organizer', 'Music Festival Director', 'Creative Arts Award'],
      subjects: ['Visual Arts', 'Music', 'Drama', 'Creative Arts'],
      image: 'https://images.pexels.com/photos/1181282/pexels-photo-1181282.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      name: 'Coach Maria Santos',
      position: 'Physical Education Head',
      department: 'sports',
      qualification: 'M.P.Ed., Sports Science Certification',
      experience: '16 years',
      specialization: 'Sports Training, Fitness, Athletic Development',
      email: 'maria.santos@educampus.edu',
      phone: '+1 (555) 123-4573',
      bio: 'Coach Santos promotes physical fitness and sportsmanship, leading our teams to numerous victories.',
      achievements: ['State Championship Coach', 'Sports Excellence Award', 'Athletic Director Certification'],
      subjects: ['Physical Education', 'Sports Training', 'Health & Wellness'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      name: 'Dr. James Wilson',
      position: 'Computer Science Teacher',
      department: 'science',
      qualification: 'Ph.D. Computer Science, M.Tech.',
      experience: '10 years',
      specialization: 'Programming, AI/ML, Robotics',
      email: 'james.wilson@educampus.edu',
      phone: '+1 (555) 123-4574',
      bio: 'Dr. Wilson introduces students to cutting-edge technology and prepares them for the digital future.',
      achievements: ['Coding Competition Mentor', 'Tech Innovation Award', 'AI Research Publications'],
      subjects: ['Computer Science', 'Programming', 'Robotics', 'Digital Literacy'],
      image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredFaculty = selectedDepartment === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDepartment);

  const stats = [
    { number: '50+', label: 'Expert Faculty' },
    { number: '15+', label: 'Average Years Experience' },
    { number: '85%', label: 'Advanced Degrees' },
    { number: '12:1', label: 'Student-Teacher Ratio' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Distinguished Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet our dedicated educators who inspire, challenge, and guide students 
              towards academic excellence and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty) => (
              <div key={faculty.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {/* Faculty Photo */}
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Faculty Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h3>
                    <p className="text-indigo-600 font-medium">{faculty.position}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{faculty.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{faculty.specialization}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{faculty.bio}</p>
                  
                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {faculty.subjects.slice(0, 3).map((subject, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                          {subject}
                        </span>
                      ))}
                      {faculty.subjects.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{faculty.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${faculty.phone}`}
                      className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faculty Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members are recognized experts in their fields with numerous accolades and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teaching Excellence</h3>
              <p className="text-gray-600">Multiple award-winning teachers recognized for innovative pedagogy</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research & Publications</h3>
              <p className="text-gray-600">Active researchers contributing to educational literature and best practices</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-600">Continuous learning and skill enhancement through workshops and training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Teaching Philosophy</h2>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              We believe in nurturing each student's unique potential through personalized attention, 
              innovative teaching methods, and a supportive learning environment that encourages 
              curiosity, critical thinking, and lifelong learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Student-Centered</h3>
                <p className="text-indigo-100">Focusing on individual learning styles and needs</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovative Methods</h3>
                <p className="text-indigo-100">Using modern pedagogical approaches and technology</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence Driven</h3>
                <p className="text-indigo-100">Committed to achieving the highest standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;