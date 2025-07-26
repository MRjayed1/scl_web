import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { User, BookOpen, Calendar, FileText, DollarSign, Bell, Download, Clock, Star, Award, LogOut } from 'lucide-react';

interface StudentData {
  id: number;
  firstName: string;
  lastName: string;
  rollNumber: string;
  grade: string;
  section: string;
  address?: string;
  phone?: string;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
}

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [student, setStudent] = useState<StudentData | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Check if student is authenticated
    const currentStudent = sessionStorage.getItem('currentStudent');
    if (!currentStudent) {
      navigate('/student-access');
      return;
    }
    
    try {
      const studentData = JSON.parse(currentStudent);
      setStudent(studentData);
    } catch (error) {
      console.error('Error parsing student data:', error);
      navigate('/student-access');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('currentStudent');
    navigate('/student-access');
  };

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your portal...</p>
        </div>
      </div>
    );
  }

  const studentData = {
    name: `${student.firstName} ${student.lastName}`,
    id: student.rollNumber,
    grade: `${student.grade}th Grade - Section ${student.section}`,
    rollNumber: student.rollNumber,
    email: student.parentEmail || 'No email provided',
    phone: student.phone || 'No phone provided',
    address: student.address || 'No address provided',
    parent: student.parentName || 'No parent name provided',
    parentPhone: student.parentPhone || 'No parent phone provided'
  };

  const grades = [
    { subject: 'Mathematics', midterm: 85, final: 88, project: 90, overall: 87, grade: 'A' },
    { subject: 'English', midterm: 92, final: 89, project: 95, overall: 92, grade: 'A+' },
    { subject: 'Science', midterm: 78, final: 82, project: 85, overall: 81, grade: 'B+' },
    { subject: 'Social Studies', midterm: 88, final: 91, project: 87, overall: 89, grade: 'A' },
    { subject: 'Computer Science', midterm: 95, final: 93, project: 98, overall: 95, grade: 'A+' },
    { subject: 'Physical Education', midterm: 90, final: 92, project: 88, overall: 90, grade: 'A' }
  ];

  const attendance = {
    totalDays: 180,
    presentDays: 172,
    absentDays: 8,
    percentage: 95.6
  };

  const assignments = [
    {
      subject: 'Mathematics',
      title: 'Quadratic Equations Problem Set',
      dueDate: '2025-01-30',
      status: 'pending',
      marks: null
    },
    {
      subject: 'English',
      title: 'Essay on Climate Change',
      dueDate: '2025-01-28',
      status: 'submitted',
      marks: 45
    },
    {
      subject: 'Science',
      title: 'Lab Report - Chemical Reactions',
      dueDate: '2025-01-25',
      status: 'graded',
      marks: 38
    },
    {
      subject: 'Social Studies',
      title: 'History Timeline Project',
      dueDate: '2025-02-05',
      status: 'pending',
      marks: null
    }
  ];

  const upcomingEvents = [
    { date: '2025-01-25', event: 'Math Quiz', time: '10:00 AM' },
    { date: '2025-01-28', event: 'Science Fair Project Submission', time: '3:00 PM' },
    { date: '2025-02-01', event: 'Parent-Teacher Meeting', time: '2:00 PM' },
    { date: '2025-02-05', event: 'Sports Day', time: '9:00 AM' }
  ];

  const feeDetails = {
    totalFees: 5000,
    paidAmount: 3000,
    pendingAmount: 2000,
    nextDueDate: '2025-02-15',
    installments: [
      { term: 'First Term', amount: 2500, status: 'paid', date: '2024-06-15' },
      { term: 'Second Term', amount: 2500, status: 'pending', date: '2025-02-15' }
    ]
  };

  const announcements = [
    {
      title: 'Winter Break Schedule',
      date: '2025-01-20',
      content: 'School will be closed from February 10-18 for winter break. Classes resume on February 19.',
      priority: 'high'
    },
    {
      title: 'Library New Books',
      date: '2025-01-18',
      content: 'New collection of science and literature books available in the library.',
      priority: 'medium'
    },
    {
      title: 'Sports Team Tryouts',
      date: '2025-01-15',
      content: 'Basketball and volleyball team tryouts scheduled for next week.',
      priority: 'low'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'grades', label: 'Grades', icon: Star },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'fees', label: 'Fees', icon: DollarSign },
    { id: 'announcements', label: 'Announcements', icon: Bell }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {studentData.name}!</h2>
        <p className="text-blue-100">Here's your academic overview for today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Overall GPA</p>
              <p className="text-2xl font-bold text-green-600">3.8</p>
            </div>
            <Award className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Attendance</p>
              <p className="text-2xl font-bold text-blue-600">{attendance.percentage}%</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Assignments</p>
              <p className="text-2xl font-bold text-orange-600">
                {assignments.filter(a => a.status === 'pending').length}
              </p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Fees</p>
              <p className="text-2xl font-bold text-red-600">${feeDetails.pendingAmount}</p>
            </div>
            <DollarSign className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {upcomingEvents.slice(0, 4).map((event, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Announcements</h3>
          <div className="space-y-3">
            {announcements.slice(0, 3).map((announcement, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800">{announcement.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    announcement.priority === 'high' ? 'bg-red-100 text-red-600' :
                    announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {announcement.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{announcement.content.substring(0, 100)}...</p>
                <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Academic Performance</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Current Semester Grades</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Midterm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{grade.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.midterm}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.final}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grade.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{grade.overall}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      grade.grade === 'A+' ? 'bg-green-100 text-green-800' :
                      grade.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                      grade.grade === 'B+' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {grade.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Attendance Record</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Days</p>
              <p className="text-3xl font-bold text-gray-800">{attendance.totalDays}</p>
            </div>
            <Calendar className="h-10 w-10 text-gray-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Present Days</p>
              <p className="text-3xl font-bold text-green-600">{attendance.presentDays}</p>
            </div>
            <Calendar className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Attendance %</p>
              <p className="text-3xl font-bold text-blue-600">{attendance.percentage}%</p>
            </div>
            <Star className="h-10 w-10 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Attendance Analysis</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-green-600 h-4 rounded-full" 
            style={{ width: `${attendance.percentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Present: </span>
            <span className="font-medium text-green-600">{attendance.presentDays} days</span>
          </div>
          <div>
            <span className="text-gray-600">Absent: </span>
            <span className="font-medium text-red-600">{attendance.absentDays} days</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Assignments & Tasks</h2>
      
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                <p className="text-sm text-gray-600">{assignment.subject}</p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
              </div>
              {assignment.marks && (
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">Marks: {assignment.marks}/50</span>
                </div>
              )}
              <div className="flex space-x-2">
                {assignment.status === 'pending' && (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Submit
                  </button>
                )}
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                  <Download className="h-4 w-4 inline mr-1" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFees = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Fee Management</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Fees</p>
              <p className="text-3xl font-bold text-gray-800">${feeDetails.totalFees}</p>
            </div>
            <DollarSign className="h-10 w-10 text-gray-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Paid Amount</p>
              <p className="text-3xl font-bold text-green-600">${feeDetails.paidAmount}</p>
            </div>
            <DollarSign className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Amount</p>
              <p className="text-3xl font-bold text-red-600">${feeDetails.pendingAmount}</p>
            </div>
            <DollarSign className="h-10 w-10 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <div className="space-y-3">
          {feeDetails.installments.map((installment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">{installment.term}</h4>
                <p className="text-sm text-gray-600">Due: {installment.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">${installment.amount}</p>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  installment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {installment.status.charAt(0).toUpperCase() + installment.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {feeDetails.pendingAmount > 0 && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">Next payment of ${feeDetails.pendingAmount} is due on {feeDetails.nextDueDate}</p>
            <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderAnnouncements = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">School Announcements</h2>
      
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{announcement.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                  announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {announcement.priority.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{announcement.date}</span>
              </div>
            </div>
            <p className="text-gray-600">{announcement.content}</p>
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
              <h1 className="text-2xl font-bold text-gray-800">Student Portal</h1>
              <p className="text-gray-600">{studentData.name} - {studentData.grade}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Student ID</p>
                <p className="font-semibold">{studentData.id}</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                data-testid="button-logout"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
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
                            ? 'bg-blue-600 text-white'
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
            {activeTab === 'grades' && renderGrades()}
            {activeTab === 'attendance' && renderAttendance()}
            {activeTab === 'assignments' && renderAssignments()}
            {activeTab === 'fees' && renderFees()}
            {activeTab === 'announcements' && renderAnnouncements()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;