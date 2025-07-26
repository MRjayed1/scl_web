# EduCampus - School Management System

## Overview
EduCampus is a comprehensive school management system with separate portals for students, teachers, and administrators. The project has been migrated from Bolt to Replit with proper client/server separation and security practices.

## Project Architecture
- **Frontend**: React with Wouter routing, TailwindCSS for styling, TypeScript for type safety
- **Backend**: Express.js server with proper middleware setup
- **Routing**: Migrated from react-router-dom to wouter for Replit compatibility
- **Storage**: In-memory storage with extensible interface for future database integration
- **Security**: Client/server separation implemented, secure session handling

## Recent Changes
- **2025-01-26**: Initial migration from Bolt to Replit
  - Converted routing system from react-router-dom to wouter
  - Fixed TypeScript compatibility issues
  - Ensured proper client/server separation
  - Updated all components to use wouter's Link and useLocation

## Key Features
- **Student Portal**: Grades, attendance, assignments, fees, announcements
- **Teacher Portal**: Class management, gradebook, materials, schedule
- **Admin Panel**: System-wide management, user administration, reports
- **Public Pages**: Home, About, Academics, Admissions, Faculty, Contact

## User Preferences
- Focus on educational institution needs
- Clean, professional UI design
- Comprehensive feature set for school management

## Development Notes
- Project uses Replit's full-stack template with Vite
- All routing components updated for wouter compatibility
- TypeScript strict mode enabled with proper type definitions
- Components follow modern React patterns with hooks