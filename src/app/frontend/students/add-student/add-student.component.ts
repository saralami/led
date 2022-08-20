import { Component, OnInit } from '@angular/core';

import { Iclass } from '../../classes/Iclass';
import { Istudent } from '../Istudent'
import { ClassService } from '../../classes/class.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  classes:Iclass[] = [];

  newStudent:Istudent = {
    firstname: '',
    lastname: '',
    classe: '',
    status: ''
  };


  constructor(
    private classService: ClassService,
    private studentService: StudentService
    ) {}

 async ngOnInit() {
    this.classes =  await this.classService.getListClasses();
}


  async addNewStudent() {
      await this.studentService.addStudent(this.newStudent);
        console.log(this.newStudent);
  }

}
