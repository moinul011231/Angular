import { Directivem,ViewContainerRef } from '@angular/core';

@Directive({ 
  selector: '[appBanner]'
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
