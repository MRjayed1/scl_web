import React, { useState } from 'react';
import { Users, BookOpen, Calendar, FileText, BarChart3, Bell, Upload, Download, Clock, Star } from 'lucide-react';

const TeacherPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock teacher data
  const teacherData = {
    name: 'Dr. Emily Rodriguez',
    id: 'TCH2024015',
    department: 'English Department',
    subjects: ['English Literature', 'Creative Writing', 'Public Speaking'],
    email: 'emily.rodriguez@educampus.edu',
    phone: '+1 (555) 123-4569'
  };

  const classes = [
    { id: 'ENG101', name: 'English Literature - Grade 10A', students: 32, schedule: 'Mon, Wed, Fri - 9:00 AM' },
    { id: 'ENG102', name: 'Creative Writing - Grade 11B', students: 28, schedule: 'Tue, Thu - 10:30 AM' },
    { id: 'ENG103', name: 'Public Speaking - Grade 12A', students: 25, schedule: 'Mon, Wed - 2:00 PM' }
  ];

  const todaySchedule = [
    { time: '8:00 AM', class: 'English Literature - Grade 10A', room: 'Room 205', type: 'lecture' },
    { time: '10:30 AM', class: 'Creative Writing - Grade 11B', room: 'Room 308', type: 'workshop' },
    { time: '2:00 PM', class: 'Public Speaking - Grade 12A', room: 'Auditorium', type: 'presentation' },
    { time: '4:00 PM', class: 'Faculty Meeting', room: 'Conference Room', type: 'meeting' }
  ];

  const assignments = [
    {
      id: 1,
      title: 'Shakespeare Essay Analysis',
      class: 'English Literature - Grade 10A',
      dueDate: '2025-01-30',
      submitted: 28,
      total: 32,
      status: 'active'
    },
    {
      id: 2,
      title: 'Creative Short Story',
      class: 'Creative Writing - Grade 11B',
      dueDate: '2025-02-05',
      submitted: 15,
      total: 28,
      status: 'active'
    },
    {
      id: 3,
      title: 'Persuasive Speech',
      class: 'Public Speaking - Grade 12A',
      dueDate: '2025-01-25',
      submitted: 25,
      total: 25,
      status: 'completed'
    }
  ];

  const recentActivities = [
    { type: 'grade', message: 'Graded 15 essays for English Literature', time: '2 hours ago' },
    { type: 'assignment', message: 'Created new assignment: Poetry Analysis', time: '4 hours ago' },
    { type: 'message', message: 'Sent feedback to 5 students', time: '6 hours ago' },
    { type: 'material', message: 'Uploaded new reading material', time: '1 day ago' }
  ];

  const studentPerformance = [
    { name: 'Alex Johnson', class: '10A', avgGrade: 87, attendance: 95, status: 'excellent' },
    { name: 'Sarah Chen', class: '11B', avgGrade: 92, attendance: 98, status: 'excellent' },
    { name: 'Mike Davis', class: '12A', avgGrade: 78, attendance: 85, status: 'good' },
    { name: 'Emma Wilson', class: '10A', avgGrade: 65, attendance: 75, status: 'needs_attention' }
  ];

  const announcements = [
    {
      title: 'New Curriculum Guidelines',
      date: '2025-01-20',
      content: 'Updated guidelines for the upcoming semester have been released.',
      priority: 'high'
    },
    {
      title: 'Teacher Training Workshop',
      date: '2025-01-18',
      content: 'Professional development workshop scheduled for next month.',
      priority: 'medium'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'classes', label: 'My Classes', icon: Users },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'grades', label: 'Gradebook', icon: Star },
    { id: 'materials', label: 'Materials', icon: BookOpen },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'announcements', label: 'Announcements', icon: Bell }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {teacherData.name}!</h2>
        <p className="text-green-100">Here's your teaching overview for today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">85</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Classes</p>
              <p className="text-2xl font-bold text-green-600">{classes.length}</p>
            </div>
            <BookOpen className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Grades</p>
              <p className="text-2xl font-bold text-orange-600">12</p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Class Performance</p>
              <p className="text-2xl font-bold text-purple-600">82%</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Today's Schedule and Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {todaySchedule.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.class}</p>
                  <p className="text-sm text-gray-600">{item.time} - {item.room}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.type === 'lecture' ? 'bg-blue-100 text-blue-600' :
                  item.type === 'workshop' ? 'bg-green-100 text-green-600' :
                  item.type === 'presentation' ? 'bg-purple-100 text-purple-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'grade' ? 'bg-green-500' :
                  activity.type === 'assignment' ? 'bg-blue-500' :
                  activity.type === 'message' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Performance Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Student Performance Overview</h3>
        <div className="space-y-3">
          {studentPerformance.map((student, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800">{student.name}</p>
                  <p className="text-sm text-gray-600">Class {student.class}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Avg Grade</p>
                  <p className="font-semibold">{student.avgGrade}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="font-semibold">{student.attendance}%</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  student.status === 'excellent' ? 'bg-green-100 text-green-800' :
                  student.status === 'good' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {student.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClasses = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Classes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{classItem.name}</h3>
              <span className="text-sm text-gray-500">{classItem.id}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Students:</span>
                <span className="font-medium">{classItem.students}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Schedule:</span>
                <span className="font-medium text-sm">{classItem.schedule}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Class
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors">
                Take Attendance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Assignments</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
          Create Assignment
        </button>
      </div>
      
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                <p className="text-sm text-gray-600">{assignment.class}</p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                assignment.status === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Due Date</p>
                <p className="font-medium">{assignment.dueDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Submissions</p>
                <p className="font-medium">{assignment.submitted}/{assignment.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="font-medium">{Math.round((assignment.submitted / assignment.total) * 100)}%</p>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Submissions
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                Edit Assignment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Gradebook</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Grade Management</h3>
            <div className="flex space-x-2">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                <Upload className="h-4 w-4 inline mr-1" />
                Import Grades
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                <Download className="h-4 w-4 inline mr-1" />
                Export Report
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>English Literature - Grade 10A</option>
              <option>Creative Writing - Grade 11B</option>
              <option>Public Speaking - Grade 12A</option>
            </select>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment 1</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment 2</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Midterm</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alex Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">87.7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-green-600 hover:text-green-900">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sarah Chen</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">95</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">89</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">92.0</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-green-600 hover:text-green-900">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Course Materials</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Upload className="h-4 w-4 inline mr-2" />
          Upload Material
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-gray-500">PDF</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Shakespeare Study Guide</h3>
          <p className="text-gray-600 text-sm mb-4">Comprehensive guide for Hamlet analysis</p>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm transition-colors">
              <Download className="h-4 w-4 inline mr-1" />
              Download
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
              Share
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <FileText className="h-8 w-8 text-green-600" />
            <span className="text-sm text-gray-500">DOC</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Creative Writing Prompts</h3>
          <p className="text-gray-600 text-sm mb-4">Collection of writing exercises and prompts</p>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm transition-colors">
              <Download className="h-4 w-4 inline mr-1" />
              Download
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
              Share
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-gray-500">PPT</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Public Speaking Techniques</h3>
          <p className="text-gray-600 text-sm mb-4">Presentation slides for speaking skills</p>
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm transition-colors">
              <Download className="h-4 w-4 inline mr-1" />
              Download
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Teacher Portal</h1>
              <p className="text-gray-600">{teacherData.name} - {teacherData.department}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Teacher ID</p>
                <p className="font-semibold">{teacherData.id}</p>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-green-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'classes' && renderClasses()}
            {activeTab === 'assignments' && renderAssignments()}
            {activeTab === 'grades' && renderGrades()}
            {activeTab === 'materials' && renderMaterials()}
            {activeTab === 'schedule' && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Schedule Management</h3>
                <p className="text-gray-500">Detailed schedule view coming soon.</p>
              </div>
            )}
            {activeTab === 'announcements' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          announcement.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {announcement.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{announcement.content}</p>
                      <p className="text-sm text-gray-500">{announcement.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;