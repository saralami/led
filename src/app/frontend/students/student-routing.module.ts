import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';




@NgModule({
 // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'students', component: ListStudentComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'students/:id', component: UpdateStudentComponent },
    ])
  ]
})
export class StudentRoutingModule { }
