"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddBannerComponent = void 0;
var core_1 = require("@angular/core");
var add_item_1 = require("./add-item");
var banner_service_1 = require("./banner.service");
var AddBannerComponent = /** @class */ (function () {
    function AddBannerComponent() {
    }
    AddBannerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-banner',
            templateUrl: './add-banner.component.html',
            styleUrls: ['./add-banner.component.css']
        })
    ], AddBannerComponent);
    return AddBannerComponent;
}());
exports.AddBannerComponent = AddBannerComponent;
implement;
OnInit, OnDestroy;
{
    globalListFunc: Function | undefined;
    addItemsList: add_item_1.AddItem[] = [];
    currentIndex = -1;
    constructor(private, banner_service_1.BannerService, banner_service_1.BannerService);
    {
        this.addItemsList = this.BannerService.getAdds();
    }
}
