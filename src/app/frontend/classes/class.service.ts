import { Injectable } from '@angular/core';
import { Iclass } from './Iclass';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  static getListClasses(): Iclass[] {
    throw new Error('Method not implemented.');
  }
listClasses: Iclass[] = []; 

  constructor() { }

  ngOnInit(): void {
  
  }
  
  getListClasses() {
    const data:any = localStorage.getItem('Classes');
    return this.listClasses = JSON.parse(data);
  }
}
