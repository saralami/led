import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Istudent } from './Istudent';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

listStudents: Istudent[] = [];

  constructor( private http: HttpClient, private router: Router ) {}

  ngOnInit(): void {

  }

  async getListStudents(): Promise<Istudent[]> {

      return new Promise<Istudent[]>((resolve, reject) => {
        this.http.get<Istudent[]>('http://localhost:3000/students').subscribe(
          (result) => {
            resolve(result);
          },
          (error) =>{
            reject(error)
          }
        )
      });
   }


async addStudent(newStudent:Istudent)  {
  return this.http.post('http://localhost:3000/students',newStudent)
  .toPromise()
  .then(() => {
     this.router.navigate(['/students']);
   });
}


async updateStudent(id: string, selectedStudent:Istudent)  {
 return this.http.patch(`http://localhost:3000/students/${id}`, selectedStudent)
    .toPromise()
    .then(() => {
     this.router.navigate(['/students']);
    });

}

async deleteStudent(id: string)  {

  return this.http.delete(`http://localhost:3000/students/${id}`)
    .toPromise()
    .then(() => {
       window.location.reload();
     });
}


}


