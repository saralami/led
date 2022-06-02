import { Component, OnInit } from '@angular/core';

import { Iclass } from '../../classes/Iclass';
import { Istudent } from '../Istudent'
import { ClassService } from '../../classes/class.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  classes:Iclass[] = [];
  students:Istudent[] = [];
  newStudent:Istudent = {
    id: 0,
    studentFirstName: '',
    studentLastName: '',
    studentClass: '',
    studentStatus: ''
  };
  constructor( private ClassService: ClassService ) { }

  ngOnInit(): void {
    this.classes = this.ClassService.getListClasses();
    //console.log(this.classes);
  }

  getLastStudentIndex() {
    if(this.students.length === 0) {
      return 0;
    }
    const lastIndex = this.students[this.students.length - 1 ].id;
    return lastIndex;
  }

  setLastStudentIndex() {
    const index = this.getLastStudentIndex() + 1;
    this.newStudent.id = index;
  }

  addNewStudent() {
   this.setLastStudentIndex();
   this.students.push({...this.newStudent});
   localStorage.setItem("Students", JSON.stringify(this.students));
    console.log(this.newStudent);
  }

}
