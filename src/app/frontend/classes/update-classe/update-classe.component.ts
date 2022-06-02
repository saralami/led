import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassService } from '../class.service';
import { Iclass } from '../Iclass';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.scss']
})
export class UpdateClasseComponent implements OnInit {
selectedClassId: number = 0;
listClasses: Iclass[] = [];
 selectedClasse: Iclass = {
   id: 0,
   classLibelle: '',
   classDescription: '',
   classStatus: ''
 }
  constructor(
    private route: ActivatedRoute,
    private allClasses: ClassService
    ) { }

  ngOnInit(): void {
    this.selectedClassId = this.route.snapshot.params["id"];
   this.listClasses = this.allClasses.getListClasses();
   this.getSelectedClass();
   // console.log( this.listClasses)
  }

  getSelectedClass() {
this.listClasses.forEach(classe => {
    if(classe.id == this.selectedClassId) {
      this.selectedClasse.id = classe.id,
      this.selectedClasse.classLibelle = classe.classLibelle,
      this.selectedClasse.classDescription = classe.classDescription,
      this.selectedClasse.classStatus = classe.classStatus
    }
});
    // console.log(this.selectedClasse);
  }

  updateClass() {
    this.listClasses.forEach(classe => {
      if(classe.id == this.selectedClassId) {
        classe.id = this.selectedClasse.id,
        classe.classLibelle = this.selectedClasse.classLibelle,
        classe.classDescription = this.selectedClasse.classDescription,
        classe.classStatus = this.selectedClasse.classStatus 
      }
  });
   
    localStorage.setItem('Classes', JSON.stringify(this.listClasses))
  }

}
