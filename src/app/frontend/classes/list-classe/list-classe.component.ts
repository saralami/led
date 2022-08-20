import { Component, OnInit } from '@angular/core';
import { Iclass } from '../Iclass';
import { ClassService } from '../class.service';
//import { HttpClient } from '@angular/common/http';
//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
listClasses:  Iclass[]= [];
selectedClassId: string = '';
selectedClass: Iclass = {
  libelle: '',
  description: '',
  status: ''
}


  constructor(
   private ClassService: ClassService) {}

  async ngOnInit() {
    this.listClasses =  await this.ClassService.getListClasses();
  }



async deleteClasse(id?: string) {

  await this.ClassService.deleteClass(id as string);
}


}
