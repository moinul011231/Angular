import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
hero  = 'Moinul';

MoinulKills= '';
villians = [
  {id:1, name: 'john'},
  
];
Moinulkilled(event: any)
{
  console.log(event);
  this.MoinulKills= event; 
}
}
