"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BannerService = void 0;
var core_1 = require("@angular/core");
var BannerService = /** @class */ (function () {
    function BannerService() {
    }
    BannerService.prototype.getAdds = function () {
        return [
            new AddItem(JobOfferComponent, {
                title: 'Software Developer',
                body: 'We are looking for software developer',
                requriement: 'Asp.NEt and angular'
            }),
            new AddItem(JobOfferComponent, {
                title: 'DevOps Engineer',
                body: 'We are looking for software developer',
                requriement: 'CICD,Automation'
            }),
            new AddItem(CourseOfferComponent, {
                title: 'Industrical Software Bootcamp',
                body: 'C#, angular,sql',
                coursePrice: '1500 BDT'
            }),
            new AddItem(CourseOfferComponent, {
                title: 'Machine Learning',
                body: 'Python,TensorFlow, Panda ',
                coursePrice: '2500 BDT'
            }),
        ];
    };
    BannerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BannerService);
    return BannerService;
}());
exports.BannerService = BannerService;
