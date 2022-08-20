import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { ListClasseComponent } from './list-classe/list-classe.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';



@NgModule({
  //declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'classes', component: ListClasseComponent },
      { path: 'add-class', component: AddClasseComponent },
      { path: 'classes/:id', component: UpdateClasseComponent }
    ]),
  ],
  exports: [ RouterModule ]
})
export class ClassRoutingModule { }
