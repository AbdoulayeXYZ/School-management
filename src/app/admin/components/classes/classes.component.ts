import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClasseService } from '../../../services/classe.service';
import { IClasse } from '../../../models/classe.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: IClasse[] = [];
  classeForm!: FormGroup;
  currentClasse: IClasse | null = null;

  constructor(private classeService: ClasseService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadClasses();
  }

  initializeForm(): void {
    this.classeForm = this.fb.group({
      serie: ['', Validators.required],
      niveau: ['', Validators.required]
    });
  }

  loadClasses(): void {
    this.classeService.getAllClasses().subscribe({
      next: (classes) => {
        this.classes = classes;
      },
      error: (err) => console.error('Error loading classes', err)
    });
  }

  onSubmit(): void {
    if (this.currentClasse) {
      this.updateClasse();
    } else {
      this.addClasse();
    }
  }

  addClasse(): void {
    this.classeService.createClasse(this.classeForm.value).subscribe({
      next: (classe) => {
        this.classes.push(classe);
        this.classeForm.reset();
      },
      error: (err) => console.error('Error adding classe', err)
    });
  }

  updateClasse(): void {
    if (!this.currentClasse) return;
    this.classeService.updateClasse(this.currentClasse._id, this.classeForm.value).subscribe({
      next: (updatedClasse) => {
        const index = this.classes.findIndex(c => c._id === this.currentClasse?._id);
        this.classes[index] = updatedClasse;
        this.classeForm.reset();
        this.currentClasse = null;
      },
      error: (err) => console.error('Error updating classe', err)
    });
  }

  onEdit(classe: IClasse): void {
    this.currentClasse = classe;
    this.classeForm.setValue({ serie: classe.serie, niveau: classe.niveau });
  }

  onDelete(classe: IClasse): void {
    this.classeService.deleteClasse(classe._id).subscribe({
      next: () => {
        this.classes = this.classes.filter(c => c._id !== classe._id);
      },
      error: (err) => console.error('Error deleting classe', err)
    });
  }
}