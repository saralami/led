import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Iclass } from './Iclass';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

listClasses: Iclass[] = [];

  constructor( private http: HttpClient, private router: Router ) {}

  ngOnInit(): void {}

  async getListClasses(): Promise<Iclass[]> {

      return new Promise<Iclass[]>((resolve, reject) => {
        this.http.get<Iclass[]>('http://localhost:3000/classes').subscribe(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error)
          }
        )
      });
   }

 async addClass(newClass:Iclass)  {
  return this.http.post('http://localhost:3000/classes',newClass)
  .toPromise()
  .then(() => {
     this.router.navigate(['/classes']);
   });
}

async updateClass(id: string, selectedClasse:Iclass)  {
console.log(`http://localhost:3000/classes/${id}`, selectedClasse)
 return this.http.patch(`http://localhost:3000/classes/${id}`, selectedClasse)
    .toPromise()
    .then(() => {
     this.router.navigate(['/classes']);
    });

}

async deleteClass(id: string)  {

  return this.http.delete(`http://localhost:3000/classes/${id}`)
    .toPromise()
    .then(() => {
       window.location.reload();
     });

 }


}
