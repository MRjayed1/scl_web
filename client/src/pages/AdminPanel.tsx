import React, { useState } from 'react';
import { Users, BookOpen, DollarSign, BarChart3, Settings, UserPlus, FileText, Bell, Calendar, Trash2, Edit, Eye } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock admin data
  const systemStats = {
    totalStudents: 1247,
    totalTeachers: 68,
    totalClasses: 45,
    totalRevenue: 750000,
    monthlyGrowth: 8.5,
    pendingApplications: 23,
    activeAnnouncements: 5,
    systemHealth: 98.5
  };

  const recentActivities = [
    { type: 'student', message: 'New student admission: Alex Johnson', time: '2 hours ago', status: 'info' },
    { type: 'teacher', message: 'Teacher profile updated: Dr. Emily Rodriguez', time: '4 hours ago', status: 'success' },
    { type: 'fee', message: 'Fee payment received: $2,500', time: '6 hours ago', status: 'success' },
    { type: 'system', message: 'System backup completed successfully', time: '8 hours ago', status: 'info' },
    { type: 'alert', message: 'Low attendance alert for Grade 8B', time: '1 day ago', status: 'warning' }
  ];

  const pendingApprovals = [
    { id: 1, type: 'admission', title: 'Student Admission - Sarah Chen', date: '2025-01-20', priority: 'high' },
    { id: 2, type: 'teacher', title: 'New Teacher Application - Dr. Mike Davis', date: '2025-01-19', priority: 'medium' },
    { id: 3, type: 'expense', title: 'Laboratory Equipment Purchase - $15,000', date: '2025-01-18', priority: 'high' },
    { id: 4, type: 'leave', title: 'Teacher Leave Request - Ms. Johnson', date: '2025-01-17', priority: 'low' }
  ];

  const quickActions = [
    { icon: UserPlus, title: 'Add New Student', description: 'Register a new student', color: 'bg-blue-500' },
    { icon: Users, title: 'Manage Teachers', description: 'View and manage faculty', color: 'bg-green-500' },
    { icon: Bell, title: 'Send Announcement', description: 'Create school-wide notice', color: 'bg-purple-500' },
    { icon: FileText, title: 'Generate Report', description: 'Create academic reports', color: 'bg-orange-500' },
    { icon: DollarSign, title: 'Fee Management', description: 'Handle fee collections', color: 'bg-teal-500' },
    { icon: Settings, title: 'System Settings', description: 'Configure system', color: 'bg-gray-500' }
  ];

  const students = [
    { id: 'STU001', name: 'Alex Johnson', grade: '10A', email: 'alex@student.edu', status: 'active', fees: 'paid' },
    { id: 'STU002', name: 'Sarah Chen', grade: '11B', email: 'sarah@student.edu', status: 'active', fees: 'pending' },
    { id: 'STU003', name: 'Mike Davis', grade: '12A', email: 'mike@student.edu', status: 'active', fees: 'paid' },
    { id: 'STU004', name: 'Emma Wilson', grade: '9C', email: 'emma@student.edu', status: 'inactive', fees: 'overdue' }
  ];

  const teachers = [
    { id: 'TCH001', name: 'Dr. Emily Rodriguez', department: 'English', email: 'emily@educampus.edu', status: 'active', experience: '15 years' },
    { id: 'TCH002', name: 'Prof. Michael Chen', department: 'Mathematics', email: 'michael@educampus.edu', status: 'active', experience: '18 years' },
    { id: 'TCH003', name: 'Dr. Robert Kim', department: 'Science', email: 'robert@educampus.edu', status: 'active', experience: '20 years' },
    { id: 'TCH004', name: 'Ms. Lisa Thompson', department: 'Social Studies', email: 'lisa@educampus.edu', status: 'on_leave', experience: '12 years' }
  ];

  const announcements = [
    { id: 1, title: 'Winter Break Schedule', content: 'School will be closed from Feb 10-18', date: '2025-01-20', priority: 'high', status: 'active' },
    { id: 2, title: 'New Safety Protocols', content: 'Updated safety measures for campus', date: '2025-01-18', priority: 'medium', status: 'active' },
    { id: 3, title: 'Parent-Teacher Meeting', content: 'Monthly PTM scheduled for Feb 1st', date: '2025-01-15', priority: 'low', status: 'draft' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: BookOpen },
    { id: 'finances', label: 'Finances', icon: DollarSign },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Administrative Dashboard</h2>
        <p className="text-purple-100">Complete overview of school operations and performance metrics.</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">{systemStats.totalStudents}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Faculty Members</p>
              <p className="text-2xl font-bold text-green-600">{systemStats.totalTeachers}</p>
            </div>
            <BookOpen className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-purple-600">${systemStats.totalRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">System Health</p>
              <p className="text-2xl font-bold text-orange-600">{systemStats.systemHealth}%</p>
            </div>
            <BarChart3 className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-800 text-sm text-center mb-1">{action.title}</h4>
                <p className="text-xs text-gray-600 text-center">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activities and Pending Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  activity.status === 'error' ? 'bg-red-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Pending Approvals</h3>
          <div className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 text-sm">{approval.title}</h4>
                  <p className="text-xs text-gray-500">{approval.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    approval.priority === 'high' ? 'bg-red-100 text-red-800' :
                    approval.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {approval.priority}
                  </span>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Student Management</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          <UserPlus className="h-4 w-4 inline mr-2" />
          Add Student
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">All Students</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search students..."
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>All Grades</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      student.fees === 'paid' ? 'bg-green-100 text-green-800' :
                      student.fees === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {student.fees}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"><Eye className="h-4 w-4" /></button>
                    <button className="text-green-600 hover:text-green-900"><Edit className="h-4 w-4" /></button>
                    <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Faculty Management</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          <UserPlus className="h-4 w-4 inline mr-2" />
          Add Teacher
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-sm text-gray-500">{teacher.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.experience}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      teacher.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {teacher.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"><Eye className="h-4 w-4" /></button>
                    <button className="text-green-600 hover:text-green-900"><Edit className="h-4 w-4" /></button>
                    <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderFinances = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Financial Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">$750,000</p>
            </div>
            <DollarSign className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Fees</p>
              <p className="text-3xl font-bold text-orange-600">$45,000</p>
            </div>
            <DollarSign className="h-10 w-10 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Monthly Growth</p>
              <p className="text-3xl font-bold text-blue-600">+8.5%</p>
            </div>
            <BarChart3 className="h-10 w-10 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">By Grade Level</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Grade 9</span>
                <span className="font-medium">$180,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Grade 10</span>
                <span className="font-medium">$195,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Grade 11</span>
                <span className="font-medium">$185,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Grade 12</span>
                <span className="font-medium">$190,000</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Payment Status</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Paid in Full</span>
                <span className="font-medium text-green-600">$705,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="font-medium text-orange-600">$45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Overdue</span>
                <span className="font-medium text-red-600">$15,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnnouncements = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Announcement Management</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Bell className="h-4 w-4 inline mr-2" />
          Create Announcement
        </button>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                  announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {announcement.priority}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  announcement.status === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {announcement.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{announcement.content}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Created: {announcement.date}</span>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">Publish</button>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
              </div>
            </div>
          </div>
        ))}
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
              <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-gray-600">School Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">System Status</p>
                <p className="font-semibold text-green-600">Online</p>
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
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
                            ? 'bg-purple-600 text-white'
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
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'teachers' && renderTeachers()}
            {activeTab === 'finances' && renderFinances()}
            {activeTab === 'announcements' && renderAnnouncements()}
            {activeTab === 'reports' && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Reports & Analytics</h3>
                <p className="text-gray-500">Detailed reporting system coming soon.</p>
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">System Settings</h3>
                <p className="text-gray-500">Configuration panel coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;