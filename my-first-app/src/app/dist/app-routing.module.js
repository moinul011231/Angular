"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var binding_component_1 = require("./pages/binding/binding.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var parent_component_1 = require("./pages/binding/parent/parent.component");
var students_details_student_details_component_1 = require("./pages/dashboard/students-details.student-details.component");
var routes = [
    { path: 'binding', component: binding_component_1.BindingComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'parent', component: parent_component_1.ParentComponent },
    { path: 'details/:id', component: students_details_student_details_component_1.StudentsDetailsComponent },
    { path: 'banner', component: AddBannerComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
