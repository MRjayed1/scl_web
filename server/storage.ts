import { 
  users, students, teachers, classes, assignments, grades, attendance, announcements,
  type User, type InsertUser, type Student, type InsertStudent, 
  type Teacher, type InsertTeacher, type Class, type InsertClass,
  type Assignment, type InsertAssignment, type Grade, type InsertGrade,
  type Attendance, type InsertAttendance, type Announcement, type InsertAnnouncement
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Student methods
  getStudent(id: number): Promise<Student | undefined>;
  getStudentByUserId(userId: number): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  getStudentsByClass(grade: string, section: string): Promise<Student[]>;
  
  // Teacher methods
  getTeacher(id: number): Promise<Teacher | undefined>;
  getTeacherByUserId(userId: number): Promise<Teacher | undefined>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  getAllTeachers(): Promise<Teacher[]>;
  
  // Class methods
  getClass(id: number): Promise<Class | undefined>;
  getClassesByTeacher(teacherId: number): Promise<Class[]>;
  createClass(classData: InsertClass): Promise<Class>;
  
  // Assignment methods
  getAssignment(id: number): Promise<Assignment | undefined>;
  getAssignmentsByClass(classId: number): Promise<Assignment[]>;
  createAssignment(assignment: InsertAssignment): Promise<Assignment>;
  
  // Grade methods
  getGradesByStudent(studentId: number): Promise<Grade[]>;
  getGradesByAssignment(assignmentId: number): Promise<Grade[]>;
  createGrade(grade: InsertGrade): Promise<Grade>;
  
  // Attendance methods
  getAttendanceByStudent(studentId: number): Promise<Attendance[]>;
  createAttendance(attendance: InsertAttendance): Promise<Attendance>;
  
  // Announcement methods
  getActiveAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Student methods
  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student || undefined;
  }

  async getStudentByUserId(userId: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.userId, userId));
    return student || undefined;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db
      .insert(students)
      .values(insertStudent)
      .returning();
    return student;
  }

  async getStudentsByClass(grade: string, section: string): Promise<Student[]> {
    return await db
      .select()
      .from(students)
      .where(and(eq(students.grade, grade), eq(students.section, section)));
  }

  // Teacher methods
  async getTeacher(id: number): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.id, id));
    return teacher || undefined;
  }

  async getTeacherByUserId(userId: number): Promise<Teacher | undefined> {
    const [teacher] = await db.select().from(teachers).where(eq(teachers.userId, userId));
    return teacher || undefined;
  }

  async createTeacher(insertTeacher: InsertTeacher): Promise<Teacher> {
    const [teacher] = await db
      .insert(teachers)
      .values(insertTeacher)
      .returning();
    return teacher;
  }

  async getAllTeachers(): Promise<Teacher[]> {
    return await db.select().from(teachers);
  }

  // Class methods
  async getClass(id: number): Promise<Class | undefined> {
    const [classData] = await db.select().from(classes).where(eq(classes.id, id));
    return classData || undefined;
  }

  async getClassesByTeacher(teacherId: number): Promise<Class[]> {
    return await db
      .select()
      .from(classes)
      .where(eq(classes.teacherId, teacherId));
  }

  async createClass(insertClass: InsertClass): Promise<Class> {
    const [classData] = await db
      .insert(classes)
      .values(insertClass)
      .returning();
    return classData;
  }

  // Assignment methods
  async getAssignment(id: number): Promise<Assignment | undefined> {
    const [assignment] = await db.select().from(assignments).where(eq(assignments.id, id));
    return assignment || undefined;
  }

  async getAssignmentsByClass(classId: number): Promise<Assignment[]> {
    return await db
      .select()
      .from(assignments)
      .where(eq(assignments.classId, classId))
      .orderBy(desc(assignments.createdAt));
  }

  async createAssignment(insertAssignment: InsertAssignment): Promise<Assignment> {
    const [assignment] = await db
      .insert(assignments)
      .values(insertAssignment)
      .returning();
    return assignment;
  }

  // Grade methods
  async getGradesByStudent(studentId: number): Promise<Grade[]> {
    return await db
      .select()
      .from(grades)
      .where(eq(grades.studentId, studentId))
      .orderBy(desc(grades.createdAt));
  }

  async getGradesByAssignment(assignmentId: number): Promise<Grade[]> {
    return await db
      .select()
      .from(grades)
      .where(eq(grades.assignmentId, assignmentId));
  }

  async createGrade(insertGrade: InsertGrade): Promise<Grade> {
    const [grade] = await db
      .insert(grades)
      .values(insertGrade)
      .returning();
    return grade;
  }

  // Attendance methods
  async getAttendanceByStudent(studentId: number): Promise<Attendance[]> {
    return await db
      .select()
      .from(attendance)
      .where(eq(attendance.studentId, studentId))
      .orderBy(desc(attendance.date));
  }

  async createAttendance(insertAttendance: InsertAttendance): Promise<Attendance> {
    const [attendanceRecord] = await db
      .insert(attendance)
      .values(insertAttendance)
      .returning();
    return attendanceRecord;
  }

  // Announcement methods
  async getActiveAnnouncements(): Promise<Announcement[]> {
    return await db
      .select()
      .from(announcements)
      .where(eq(announcements.isActive, true))
      .orderBy(desc(announcements.createdAt));
  }

  async createAnnouncement(insertAnnouncement: InsertAnnouncement): Promise<Announcement> {
    const [announcement] = await db
      .insert(announcements)
      .values(insertAnnouncement)
      .returning();
    return announcement;
  }
}

export const storage = new DatabaseStorage();
