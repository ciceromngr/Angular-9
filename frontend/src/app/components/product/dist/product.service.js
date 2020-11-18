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
var ProductService = /** @class */ (function () {
    function ProductService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseURL = 'http://localhost:3333/products';
    }
    ProductService.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    ProductService.prototype.create = function (product) {
        return this.http.post(this.baseURL, product);
    };
    ProductService.prototype.read = function () {
        return this.http.get(this.baseURL);
    };
    ProductService.prototype.readById = function (id) {
        var url = this.baseURL + "/" + id;
        return this.http.get(url);
    };
    ProductService.prototype.update = function (product) {
        var url = this.baseURL + "/" + product.id;
        return this.http.put(url, product);
    };
    ProductService.prototype["delete"] = function (id) {
        var url = this.baseURL + "/" + id;
        return this.http["delete"](url);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
