import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Iclass } from '../Iclass';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.scss']
})
export class AddClasseComponent implements OnInit {

constructor( public http: HttpClient, public classService: ClassService) {}

newClass: Iclass = {
    libelle: '',
    description: '',
    status: ''
  };

ngOnInit(): void {}

async addClass(){
     await this.classService.addClass(this.newClass);
  }

}
