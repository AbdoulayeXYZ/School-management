import Student, { IStudent } from "../models/student.model";
import Classe from "../models/classe.model";

class StudentService {
    async createStudent(studentData: IStudent): Promise<IStudent> {
        const student = new Student(studentData);
        return await student.save();
    }

    async getAllStudents(): Promise<IStudent[]> {
        return await Student.find().populate('classe').exec();
    }

    async getStudentById(id: string): Promise<IStudent | null> {
        return await Student.findById(id).populate('classe');
    }

    async updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudent | null> {
        return await Student.findByIdAndUpdate(id, studentData, { new: true }).populate('classe');
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        console.log('Deleting student with ID:', id); // Debugging line
        return await Student.findByIdAndDelete(id);
    }
}

export default new StudentService();
