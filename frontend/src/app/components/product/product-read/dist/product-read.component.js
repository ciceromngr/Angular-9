"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductReadComponent = void 0;
var core_1 = require("@angular/core");
var ProductReadComponent = /** @class */ (function () {
    function ProductReadComponent(productService) {
        this.productService = productService;
        this.displayedColumns = ['id', 'name', 'price', 'action'];
    }
    ProductReadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.read().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductReadComponent = __decorate([
        core_1.Component({
            selector: 'app-product-read',
            templateUrl: './product-read.component.html',
            styleUrls: ['./product-read.component.css']
        })
    ], ProductReadComponent);
    return ProductReadComponent;
}());
exports.ProductReadComponent = ProductReadComponent;
