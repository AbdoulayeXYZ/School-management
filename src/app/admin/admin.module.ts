import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    StudentsComponent,
    ClassesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent
  ]
})
export class AdminModule { }
