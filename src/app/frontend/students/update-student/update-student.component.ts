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
  selectedStudent: Istudent = {
    firstname: '',
    lastname: '',
    classe: '',
    status: ''
  };

selectedStudentId: string = '';

classes: Iclass[] = [];


  constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private route : ActivatedRoute
    ) { }

async  ngOnInit() {
  this.selectedStudentId = this.route.snapshot.params["id"];
this.students = await this.studentService.getListStudents();
this.classes = await this.classService.getListClasses();
  this.getSelectedStudent();
  }



  getSelectedStudent() {
    this.students?.forEach(student => {
        if(student._id == this.selectedStudentId) {
         // this.selectedStudent._id = student._id,
          this.selectedStudent.firstname = student.firstname,
          this.selectedStudent.lastname = student.lastname,
          this.selectedStudent.classe = student.classe,
          this.selectedStudent.status = student.status
        }

     });
  }


  // getSelectedClass() {
  //   this.listClasses?.forEach(classe => {

  //       if(classe._id == this.selectedClassId) {
  //        // this.selectedClasse._id =  classe._id,
  //         this.selectedClasse.libelle = classe.libelle,
  //         this.selectedClasse.description = classe.description,
  //         this.selectedClasse.status = classe.status

  //       }
  //   });

  //     }

  async updateSelectedStudent() {
    await this.studentService.updateStudent(this.selectedStudentId,this.selectedStudent);
    console.log('updated',this.selectedStudentId);

  }

}
