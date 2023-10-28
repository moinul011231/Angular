import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }
  getAdds() {
    return[
      new AddItem(JobOfferComponent,{
        title: 'Software Developer',
        body: 'We are looking for software developer',
        requriement : 'Asp.NEt and angular'
      }),

      new AddItem(JobOfferComponent,{
        title: 'DevOps Engineer',
        body: 'We are looking for software developer',
        requriement : 'CICD,Automation'
      }),

      new AddItem(CourseOfferComponent,{
        title: 'Industrical Software Bootcamp',
        body: 'C#, angular,sql',
        coursePrice: '1500 BDT'
      }),
      
      new AddItem(CourseOfferComponent,{
        title: 'Machine Learning',
        body: 'Python,TensorFlow, Panda ',
        coursePrice: '2500 BDT'
      }),
    ];
  }
}
