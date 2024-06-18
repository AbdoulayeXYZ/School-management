import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
  path:'',
  component: AdminComponent,
  children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path:'students',
        component: StudentsComponent,
      },
      {
        path:'classes',
        component: ClassesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
