import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navRouter:Array<any>;

  constructor()
  {
    this.navRouter = [];
  }
  ngOnInit(): void
  {
    this.navRouter =[
      { routerName: 'parent', displayName:'Parents'},
      { routerName: 'dashboard', displayName:'Dashboard'},
      { routerName: 'banner', displayName:'Banner'},


    ]
    
  }

}
