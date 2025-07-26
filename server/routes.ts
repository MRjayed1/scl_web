import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { eq } from "drizzle-orm";
import { students } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Student verification route
  app.get("/api/students/verify/:rollNumber", async (req, res) => {
    try {
      const { rollNumber } = req.params;
      
      // Query student by roll number with user info
      const [student] = await db
        .select({
          id: students.id,
          userId: students.userId,
          firstName: students.firstName,
          lastName: students.lastName,
          rollNumber: students.rollNumber,
          grade: students.grade,
          section: students.section,
          dateOfBirth: students.dateOfBirth,
          address: students.address,
          phone: students.phone,
          parentName: students.parentName,
          parentPhone: students.parentPhone,
          parentEmail: students.parentEmail,
          admissionDate: students.admissionDate
        })
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
