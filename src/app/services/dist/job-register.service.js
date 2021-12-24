"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobRegisterService = void 0;
var core_1 = require("@angular/core");
var JobRegisterService = /** @class */ (function () {
    function JobRegisterService(http) {
        this.http = http;
        this.API_URL_GetAll = 'http://localhost:8001/api/jobsRegister/getAll';
        this.API_URL_GetById = 'http://localhost:8001/api/jobsRegister/getById';
        this.API_URL_Search = 'http://localhost:8001/api/jobsRegister/search';
        this.API_URL_Update = 'http://localhost:8001/api/jobsRegister/update';
    }
    JobRegisterService.prototype.getAllJobregister = function (pageN, pageS) {
        return this.http.get("" + this.API_URL_GetAll, {
            params: {
                pageNumber: pageN,
                pageSize: pageS
            }
        });
    };
    JobRegisterService.prototype.getJobregisterById = function (id) {
        return this.http.get(this.API_URL_GetById + "/" + id, {
            params: {
                IdNumber: id
            }
        });
    };
    JobRegisterService.prototype.searchJobRegister = function (search) {
        return this.http.post("" + this.API_URL_Search, search);
    };
    JobRegisterService.prototype.updateJobRegister = function (update) {
        return this.http.post("" + this.API_URL_Update, update);
    };
    JobRegisterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JobRegisterService);
    return JobRegisterService;
}());
exports.JobRegisterService = JobRegisterService;
