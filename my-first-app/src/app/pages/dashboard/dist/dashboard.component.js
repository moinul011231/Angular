"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var student_service_1 = require("../_service/student.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(studentService) {
        this.studentService = studentService;
        this.students = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadStudent();
    };
    DashboardComponent.prototype.loadStudent = function () {
        var _this = this;
        this.studentService.getStudents().subscribe({ next: function (res) {
                _this.students = res;
            } });
    };
    DashboardComponent.prototype.navigateStudent = function (id) {
        this.studentService.getStudentById(id).subscribe({ next: function (res) { } }, {
            "if": function (res) {
                console.log(res);
            },
            "else": {
                console: console,
                : .log("There is no student found")
            }
        });
    };
    ;
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
// addStudent(name: string): void{
// };
student_service_1.removeStudents(studentId, Student);
void {
    "this": .studentService.removeStudentById(studentId.id).subscribe(function (stud) {
        _this.students = _this.students.filter(function (student) { return student != stud; });
    })
};
