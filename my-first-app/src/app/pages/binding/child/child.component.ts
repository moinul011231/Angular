import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() villian!: any;
@Input('heroName') heroName = '';  

@Output() killVillian = new EventEmitter<any>();
onKillVillian(event:any)
{
  this.killVillian.emit("Moinul killed the villian");
}

}
