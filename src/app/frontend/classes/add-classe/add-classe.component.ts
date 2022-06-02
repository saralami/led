import { Component, OnInit } from '@angular/core';
import { Iclass } from '../Iclass';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.scss']
})
export class AddClasseComponent implements OnInit {
listClasses: Iclass[] = []; 
newClass: Iclass = {
  id: 0,
  classLibelle: "",
  classDescription: "",
  classStatus: "",
};
  constructor() { }

  ngOnInit(): void {}

 
  getLastClassIndex(){
    if(this.listClasses.length === 0) {
      return 0;
    }
    const lastIndex = this.listClasses[ this.listClasses.length - 1].id;
    return lastIndex;
  }

  setLastClassIndex() {
    const index = this.getLastClassIndex() + 1;
    this.newClass.id = index;
  }

  addClass(){

    this.setLastClassIndex();
     this.listClasses.push({...this.newClass});
    localStorage.setItem('Classes', JSON.stringify(this.listClasses)); 
   }

}
