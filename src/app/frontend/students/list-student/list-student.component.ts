import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { Istudent } from '../Istudent';
import { ClassService } from '../../classes/class.service';
import { Iclass } from '../../classes/Iclass';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
students:Istudent[] = [];
classes:Iclass[] = [];
indexOfStudent: number = 0;
  constructor( 
    private StudentService: StudentService,
    private ClassService: ClassService 
    ) 
  { }

  ngOnInit(): void {
      this.students = this.StudentService.getStudents();
      this.classes = this.ClassService.getListClasses();
  }

  getIndexOfStudent(id:number) {
    this.students.forEach(element => {
      if(id === element.id) {
       this.indexOfStudent = this.students.indexOf(element)
      // console.log(this.indexOfParking); 
      }
      return this.indexOfStudent;
     });
  }
deleteStudent(id: number) {
  this.getIndexOfStudent(id);
  console.log(this.indexOfStudent);

  this.students.splice(this.indexOfStudent, 1);
  localStorage.setItem('Students', JSON.stringify(this.students));
}

  }

