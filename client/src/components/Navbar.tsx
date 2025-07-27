import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, GraduationCap, User, Users, Settings, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ];

  const portals = [
    { name: 'Student Portal', href: '/student-access', icon: User, color: 'text-blue-600' },
    { name: 'Teacher Portal', href: '/teacher-access', icon: Users, color: 'text-green-600' },
    { name: 'Admin Panel', href: '/admin-panel', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">EduCampus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location === item.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Portal Links */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsPortalDropdownOpen(!isPortalDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
              >
                <span>Portals</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPortalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPortalDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {portals.map((portal) => {
                    const Icon = portal.icon;
                    return (
                      <Link
                        key={portal.name}
                        href={portal.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setIsPortalDropdownOpen(false)}
                      >
                        <div className={`p-2 rounded-lg ${
                          portal.name === 'Student Portal' ? 'bg-blue-100' :
                          portal.name === 'Teacher Portal' ? 'bg-green-100' :
                          'bg-purple-100'
                        }`}>
                          <Icon className={`h-4 w-4 ${
                            portal.name === 'Student Portal' ? 'text-blue-600' :
                            portal.name === 'Teacher Portal' ? 'text-green-600' :
                            'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium">{portal.name}</p>
                          <p className="text-xs text-gray-500">
                            {portal.name === 'Student Portal' ? 'Access grades & assignments' :
                             portal.name === 'Teacher Portal' ? 'Manage classes & students' :
                             'System administration'}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-2">
              {portals.map((portal) => {
                const Icon = portal.icon;
                return (
                  <Link
                    key={portal.name}
                    href={portal.href}
                    className="flex items-center space-x-3 px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${
                      portal.name === 'Student Portal' ? 'bg-blue-100' :
                      portal.name === 'Teacher Portal' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      <Icon className={`h-4 w-4 ${
                        portal.name === 'Student Portal' ? 'text-blue-600' :
                        portal.name === 'Teacher Portal' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">{portal.name}</p>
                      <p className="text-xs text-gray-500">
                        {portal.name === 'Student Portal' ? 'Access grades & assignments' :
                         portal.name === 'Teacher Portal' ? 'Manage classes & students' :
                         'System administration'}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );

export default Navbar;