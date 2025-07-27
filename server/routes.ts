import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { eq, and } from "drizzle-orm";
import { students, teachers, users } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Student verification route
  app.get("/api/students/verify/:rollNumber", async (req, res) => {
    try {
      const { rollNumber } = req.params;
      
      // First check if we have any students in the database
      const studentCount = await db.select().from(students).limit(1);
      
      if (studentCount.length === 0) {
        // Create sample students if none exist
        await createSampleData();
      }
      
      // Query student by roll number
      const [student] = await db
        .select()
        .from(students)
        .where(eq(students.rollNumber, rollNumber));

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      console.error("Error verifying student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Teacher verification route
  app.get("/api/teachers/verify/:employeeId", async (req, res) => {
    try {
      const { employeeId } = req.params;
      
      // First check if we have any teachers in the database
      const teacherCount = await db.select().from(teachers).limit(1);
      
      if (teacherCount.length === 0) {
        // Create sample data if none exist
        await createSampleData();
      }
      
      // Query teacher by employee ID
      const [teacher] = await db
        .select()
        .from(teachers)
        .where(eq(teachers.employeeId, employeeId));

      if (!teacher) {
        return res.status(404).json({ error: "Teacher not found" });
      }

      res.json(teacher);
    } catch (error) {
      console.error("Error verifying teacher:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get student details by ID
  app.get("/api/students/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = await storage.getStudent(id);
      
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get student grades
  app.get("/api/students/:id/grades", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const grades = await storage.getGradesByStudent(id);
      res.json(grades);
    } catch (error) {
      console.error("Error fetching grades:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get student attendance
  app.get("/api/students/:id/attendance", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const attendance = await storage.getAttendanceByStudent(id);
      res.json(attendance);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get active announcements
  app.get("/api/announcements", async (req, res) => {
    try {
      const announcements = await storage.getActiveAnnouncements();
      res.json(announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Function to create sample data
async function createSampleData() {
  try {
    // Create sample users first
    const sampleUsers = [
      { username: 'student001', password: 'password123', email: 'student001@educampus.edu', role: 'student' as const },
      { username: 'student002', password: 'password123', email: 'student002@educampus.edu', role: 'student' as const },
      { username: 'student003', password: 'password123', email: 'student003@educampus.edu', role: 'student' as const },
      { username: 'student004', password: 'password123', email: 'student004@educampus.edu', role: 'student' as const },
      { username: 'student005', password: 'password123', email: 'student005@educampus.edu', role: 'student' as const },
      { username: 'teacher001', password: 'password123', email: 'emily.rodriguez@educampus.edu', role: 'teacher' as const },
      { username: 'teacher002', password: 'password123', email: 'michael.chen@educampus.edu', role: 'teacher' as const },
      { username: 'teacher003', password: 'password123', email: 'robert.kim@educampus.edu', role: 'teacher' as const },
    ];

    const createdUsers = await db.insert(users).values(sampleUsers).returning();

    // Create sample students
    const sampleStudents = [
      {
        userId: createdUsers[0].id,
        firstName: 'Alex',
        lastName: 'Johnson',
        rollNumber: 'STU2025001',
        grade: '10',
        section: 'A',
        address: '123 Main St, City',
        phone: '+1-555-0101',
        parentName: 'Robert Johnson',
        parentPhone: '+1-555-0102',
        parentEmail: 'robert.johnson@email.com'
      },
      {
        userId: createdUsers[1].id,
        firstName: 'Sarah',
        lastName: 'Chen',
        rollNumber: 'STU2025002',
        grade: '11',
        section: 'B',
        address: '456 Oak Ave, City',
        phone: '+1-555-0201',
        parentName: 'Lisa Chen',
        parentPhone: '+1-555-0202',
        parentEmail: 'lisa.chen@email.com'
      },
      {
        userId: createdUsers[2].id,
        firstName: 'Mike',
        lastName: 'Davis',
        rollNumber: 'STU2025003',
        grade: '12',
        section: 'A',
        address: '789 Pine St, City',
        phone: '+1-555-0301',
        parentName: 'John Davis',
        parentPhone: '+1-555-0302',
        parentEmail: 'john.davis@email.com'
      },
      {
        userId: createdUsers[3].id,
        firstName: 'Emma',
        lastName: 'Wilson',
        rollNumber: 'STU2025004',
        grade: '9',
        section: 'C',
        address: '321 Elm St, City',
        phone: '+1-555-0401',
        parentName: 'Mary Wilson',
        parentPhone: '+1-555-0402',
        parentEmail: 'mary.wilson@email.com'
      },
      {
        userId: createdUsers[4].id,
        firstName: 'James',
        lastName: 'Brown',
        rollNumber: 'STU2025005',
        grade: '10',
        section: 'B',
        address: '654 Maple Ave, City',
        phone: '+1-555-0501',
        parentName: 'David Brown',
        parentPhone: '+1-555-0502',
        parentEmail: 'david.brown@email.com'
      }
    ];

    await db.insert(students).values(sampleStudents);

    // Create sample teachers
    const sampleTeachers = [
      {
        userId: createdUsers[5].id,
        firstName: 'Emily',
        lastName: 'Rodriguez',
        employeeId: 'TCH2024001',
        department: 'English',
        qualification: 'M.A. English Literature, B.Ed.',
        experience: 15,
        phone: '+1-555-1001',
        address: '100 Faculty Lane, City'
      },
      {
        userId: createdUsers[6].id,
        firstName: 'Michael',
        lastName: 'Chen',
        employeeId: 'TCH2024002',
        department: 'Mathematics',
        qualification: 'M.Sc. Mathematics, B.Ed.',
        experience: 18,
        phone: '+1-555-1002',
        address: '101 Faculty Lane, City'
      },
      {
        userId: createdUsers[7].id,
        firstName: 'Robert',
        lastName: 'Kim',
        employeeId: 'TCH2024003',
        department: 'Science',
        qualification: 'Ph.D. Physics, M.Sc. Physics',
        experience: 20,
        phone: '+1-555-1003',
        address: '102 Faculty Lane, City'
      }
    ];

    await db.insert(teachers).values(sampleTeachers);

    console.log('Sample data created successfully');
  } catch (error) {
    console.error('Error creating sample data:', error);
  }
}