"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InMemoryService = void 0;
var core_1 = require("@angular/core");
var InMemoryService = /** @class */ (function () {
    function InMemoryService() {
    }
    InMemoryService.prototype.creatDb = function () {
        var students = [
            { id: 1, name: 'poly', discription: 'poly is very good ' },
            { id: 2, name: 'Labib' },
            { id: 3, name: 'Moinul', discription: 'Moinul is also very good' },
            { id: 4, name: 'Rajit' },
            { id: 5, name: 'Adil' },
            { id: 6, name: 'Mr.Laura' },
            { id: 7, name: 'Mr. Evan' },
            { id: 8, name: 'Mr. Ismo' },
            { id: 9, name: 'Mr. Bithi' },
        ];
        return { students: students };
    };
    InMemoryService.prototype.genId = function (students) {
        return students.length > 0 ?
            Math.max.apply(Math, students.map(function (x) { return x.id; })) + 1
            : 11;
    };
    InMemoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InMemoryService);
    return InMemoryService;
}());
exports.InMemoryService = InMemoryService;
