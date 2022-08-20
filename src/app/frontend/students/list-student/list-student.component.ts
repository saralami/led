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
classes:Iclass[] = [];
students:Istudent[] = [];
//indexOfStudent: number = 0;
  constructor(
    private StudentService: StudentService,
    private ClassService: ClassService
    )
  { }

 async ngOnInit() {
    this.students = await this.StudentService.getListStudents();
   this.classes = await this.ClassService.getListClasses();
  }





async deleteStudent(id?: string) {
   await this.StudentService.deleteStudent(id as string);
}

  }

