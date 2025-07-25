import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EduCampus</span>
            </div>
            <p className="text-gray-300 mb-4">
              Committed to excellence in education, fostering growth, innovation, and character development in every student.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">123 Education Street, Academic City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@educampus.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portals</h3>
            <ul className="space-y-2">
              <li><Link to="/student-portal" className="text-gray-300 hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="/teacher-portal" className="text-gray-300 hover:text-white transition-colors">Teacher Portal</Link></li>
              <li><Link to="/admin-panel" className="text-gray-300 hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 EduCampus. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;