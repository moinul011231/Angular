import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }

  creatDb( ) {
    const students: Student[] = [
      {id: 1, name: 'poly',discription : 'poly is very good '},
      {id: 2, name: 'Labib'},
      {id: 3, name: 'Moinul' ,discription: 'Moinul is also very good'},
      {id: 4, name: 'Rajit'},
      {id: 5, name: 'Adil'},
      {id: 6, name: 'Mr.Laura'},
      {id: 7, name: 'Mr. Evan'},
      {id: 8, name: 'Mr. Ismo'},
      {id: 9, name: 'Mr. Bithi'},

    ];
    return { students };
  }

  genId(students: Student[]): number{
    return students.length> 0? 
    Math.max(...students.map((x) => x.id)) + 1 
     : 11;
  }
}
