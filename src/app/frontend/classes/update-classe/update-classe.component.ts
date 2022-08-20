import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassService } from '../class.service';
import { Iclass } from '../Iclass';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.scss']
})
export class UpdateClasseComponent implements OnInit {
selectedClassId: string = '';
listClasses: Iclass[] = [];
 selectedClasse: Iclass = {
 //  _id: '',
   libelle: '',
   description: '',
   status: ''
 }
  constructor(
    private route: ActivatedRoute,
    private allClasses: ClassService,
    public classService: ClassService,
    private changeDetector: ChangeDetectorRef
    ) { }

 async ngOnInit() {
  this.selectedClassId = this.route.snapshot.params["id"];
//console.log('selected from link', this.selectedClassId );
      this.listClasses = await this.allClasses.getListClasses()
      this.getSelectedClass();
      this.changeDetector.detectChanges();


  }

  getSelectedClass() {
this.listClasses?.forEach(classe => {

    if(classe._id == this.selectedClassId) {
     // this.selectedClasse._id =  classe._id,
      this.selectedClasse.libelle = classe.libelle,
      this.selectedClasse.description = classe.description,
      this.selectedClasse.status = classe.status

    }
});

  }

  async updateClass() {

     await this.classService.updateClass(this.selectedClassId,this.selectedClasse);
    // console.log('updated',this.selectedClassId);
     //this.selectedClassId = '';
  }





}
