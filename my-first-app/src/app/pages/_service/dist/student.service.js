"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        //Read (Get)
        this.studentsUrl = 'api/students';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentsUrl).pipe(operators_1.tap(function (_) { return console.log('Fetched All Students'); }), operators_1.catchError(this.handleErrorResponse('getStudents', [])));
    };
    StudentService.prototype.getStudentById = function (id) {
        var url = this.studentsUrl + "?id = " + id;
        return this.http.get(this.studentsUrl).pipe(operators_1.tap(function (_) { return console.log("Fetched studetn by " + id + " "); }), operators_1.catchError(this.handleErrorResponse("getStudents by " + id)));
    };
    StudentService.prototype.handleErrorResponse = function (opertaion, result) {
        if (opertaion === void 0) { opertaion = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(opertaion + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    StudentService.prototype.saveStudent = function (studet) {
        return this.http.post(this.studentsUrl, student, this.httpOptinos).pipe(operators_1.tap(function (newStudent) { return console.log("Add new Student w/id " + newStudent + " "); }));
        operators_1.catchError(this.handleErrorResponse("Save Student"));
    };
    StudentService.prototype.removeStudentById = function (id) {
        var url = this.studentsUrl + "?id = " + id;
        return this.http["delete"](this.studentsUrl).pipe(operators_1.tap(function (_) { return console.log("Delete studetn by " + id + " "); }), operators_1.catchError(this.handleErrorResponse("delete students by " + id)));
    };
    StudentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
