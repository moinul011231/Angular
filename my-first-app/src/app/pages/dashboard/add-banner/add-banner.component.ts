import { Component,OnInit, OnDestroy,ViewChild, } from '@angular/core';
import { AddItem} from './add-item';
import { BannerService } from './banner.service';
import { BannerDirective } from './banner.directive';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implement OnInit, OnDestroy {

  globalListFunc: Function| undefined;
  public addItemsList: AddItem[] = [];
  currentIndex = -1 ;
  @ViewChild(BannerDirective, {static: true})
  constructor(private BannerService: BannerService){
    this.addItemsList = this.BannerService.getAdds();
  }

}
