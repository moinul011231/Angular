import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService,removeStudents } from '../_service/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService){}
  ngOnInit(): void{
    this.loadStudent();
  }
  loadStudent(){
    this.studentService.getStudents().subscribe({next: (res) => {
      this.students = res;
    }})
  }

  navigateStudent(id: number){
    this.studentService.getStudentById(id).subscribe({next (res) => {
      if(res){
        console.log(res);
      }
      else{
        console.log("There is no student found");
      }
    }});
  }
  // addStudent(name: string): void{

  // };

  removeStudents(studentId: Student): void{
      this.studentService.removeStudentById(studentId.id).subscribe(stud=>{
        this.students  = this.students.filter((student) => student!= stud);

  })
  };


}
