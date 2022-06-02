import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
students:[] = [];
  constructor() { }

  getStudents() {
    const data: any = localStorage.getItem("Students");
    return this.students = JSON.parse(data);
  }
 
}
