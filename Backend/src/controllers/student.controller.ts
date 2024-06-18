import { Request, Response } from "express";
import Student from "../models/student.model";

class StudentController {
    async createStudent(req: Request, res: Response): Promise<void> {
        try {
            const newStudent = new Student(req.body);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }

    async getAllStudents(req: Request, res: Response): Promise<void> {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }

    async getStudentById(req: Request, res: Response): Promise<void> {
        try {
            const student = await Student.findById(req.params.id);
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }

    async updateStudent(req: Request, res: Response): Promise<void> {
        try {
            const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedStudent) {
                res.status(200).json(updatedStudent);
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        try {
            console.log('Deleting student with ID:', req.params.id); // Debugging line
            const deletedStudent = await Student.findByIdAndDelete(req.params.id);
            if (deletedStudent) {
                res.status(200).json({ message: "Student deleted successfully" });
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }
}

export default new StudentController();
