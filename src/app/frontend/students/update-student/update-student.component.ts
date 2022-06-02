import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../classes/class.service';
import { Iclass } from '../../classes/Iclass';

import { Istudent } from '../Istudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
students: Istudent[] = [];
classes: Iclass[] = [];
selectedStudentId: number = 0;
selectedStudent: Istudent = {
  id: 0,
  studentFirstName: '',
  studentLastName: '',
  studentClass: '',
  studentStatus: ''
}
  constructor(
    private StudentService: StudentService,
    private ClasseService: ClassService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
     this.students = this.StudentService.getStudents();
     this.classes = this.ClasseService.getListClasses();
     this.selectedStudentId = this.route.snapshot.params['id'];
     this.getSelectedStudent();
    // console.log(this.selectedStudentId)
  }

  getSelectedStudent() {
    this.students.forEach(student => {
        if(student.id == this.selectedStudentId) {
          this.selectedStudent.id = student.id,
          this.selectedStudent.studentFirstName = student.studentFirstName,
          this.selectedStudent.studentLastName = student.studentLastName,
          this.selectedStudent.studentClass = student.studentClass,
          this.selectedStudent.studentStatus = student.studentStatus
        }
     });
  }

  updateSelectedStudent() {
    this.students.forEach(student => {
      if(student.id == this.selectedStudentId) {
        student.id = this.selectedStudent.id,
        student.studentFirstName =  this.selectedStudent.studentFirstName,
        student.studentLastName =  this.selectedStudent.studentLastName,
        student.studentClass =  this.selectedStudent.studentClass,
        student.studentStatus =  this.selectedStudent.studentStatus
      }
   });
   
    console.log(this.students);
    localStorage.setItem("Students", JSON.stringify(this.students));
  }

}
