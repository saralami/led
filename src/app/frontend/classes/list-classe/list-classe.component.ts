import { Component, OnInit } from '@angular/core';
import { Iclass } from '../Iclass';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
listClasses: Iclass[] = [];
selectedClassId: number = 0;
indexOfClasse: number = 0;
  constructor(
    private ClassService: ClassService,
    
    ) {   }

  ngOnInit(): void {
     this.listClasses = this.ClassService.getListClasses();
  }

  getIndexOfClasse(id:number) {
    this.listClasses.forEach(element => {
      if(id === element.id) {
       this.indexOfClasse = this.listClasses.indexOf(element)
      // console.log(this.indexOfParking); 
      }
      return this.indexOfClasse;
     });
  }
deleteClasse(id: number) {
  this.getIndexOfClasse(id);
  console.log(this.indexOfClasse);

  this.listClasses.splice(this.indexOfClasse,1);
  localStorage.setItem('Classes', JSON.stringify(this.listClasses));
}
  

}
