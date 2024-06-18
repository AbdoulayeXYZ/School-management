import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../../services/student.service';
import { IStudent } from '../../../models/student.model';
import { IClasse } from '../../../models/classe.model';
import { ClasseService } from './../../../services/classe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: IStudent[] = [];
  classes: IClasse[] = [];
  studentForm: FormGroup;
  currentStudent: IStudent | null = null;

  constructor(private studentService: StudentService, private classeService: ClasseService, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      fullName: [''],
      classe: ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this.loadClasses();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        console.log('Students data:', data); // Vérifiez les données ici
        this.students = data;
      },
      error: (err) => {
        console.error('Failed to load students', err);
      }
    });
  }

  loadClasses(): void {
    this.classeService.getAllClasses().subscribe({
      next: (data) => {
        this.classes = data;
      },
      error: (err) => {
        console.error('Failed to load classes', err);
      }
    });
  }

  onSubmit(): void {
    if (this.currentStudent) {
      this.updateStudent();
    } else {
      this.addStudent();
    }
  }

  addStudent(): void {
    this.studentService.createStudent(this.studentForm.value).subscribe({
      next: (student) => {
        this.students.push(student);
        this.studentForm.reset();
      },
      error: (err) => {
        console.error('Failed to add student', err);
      }
    });
  }

  updateStudent(): void {
    if (!this.currentStudent) return;
    this.studentService.updateStudent(this.currentStudent._id, this.studentForm.value).subscribe({
      next: (updatedStudent) => {
        const index = this.students.findIndex(s => s._id === this.currentStudent?._id);
        if (index !== -1) {
          this.students[index] = updatedStudent;
        }
        this.studentForm.reset();
        this.currentStudent = null;
      },
      error: (err) => {
        console.error('Failed to update student', err);
      }
    });
  }

  onEdit(student: IStudent): void {
    this.currentStudent = student;
    this.studentForm.patchValue(student);
  }

  onDelete(student: IStudent): void {
    console.log('Deleting student:', student); // Debugging line
    if (!student._id) {
      console.error('Student ID is undefined');
      return;
    }
    this.studentService.deleteStudent(student._id).subscribe({
      next: () => {
        this.students = this.students.filter(s => s._id !== student._id);
      },
      error: (err) => {
        console.error('Failed to delete student', err);
      }
    });
  }

  getClasseDescription(classe: any): string {
    if (!classe || !classe.niveau || !classe.serie) {
      return 'Classe non définie';
    }
    return `${classe.niveau} - ${classe.serie}`;
  }
}