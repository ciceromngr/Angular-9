"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ProductService = /** @class */ (function () {
    function ProductService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseURL = 'http://localhost:3333/products';
    }
    ProductService.prototype.showMessage = function (msg, isError) {
        if (isError === void 0) { isError = false; }
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: isError ? ['msg-error'] : ['msg-success']
        });
    };
    ProductService.prototype.create = function (product) {
        var _this = this;
        return this.http.post(this.baseURL, product).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    ProductService.prototype.read = function () {
        var _this = this;
        return this.http.get(this.baseURL).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    ProductService.prototype.readById = function (id) {
        var _this = this;
        var url = this.baseURL + "/" + id;
        return this.http.get(url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    ProductService.prototype.update = function (product) {
        var _this = this;
        var url = this.baseURL + "/" + product.id;
        return this.http.put(url, product).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    ProductService.prototype["delete"] = function (id) {
        var _this = this;
        var url = this.baseURL + "/" + id;
        return this.http["delete"](url).pipe(operators_1.map(function (obj) { return obj; }), operators_1.catchError(function (e) { return _this.errorHandler(e); }));
    };
    ProductService.prototype.errorHandler = function (e) {
        this.showMessage('Ocorreu um erro', true);
        return rxjs_1.EMPTY;
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
