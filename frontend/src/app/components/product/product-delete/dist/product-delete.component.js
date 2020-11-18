"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDeleteComponent = void 0;
var core_1 = require("@angular/core");
var ProductDeleteComponent = /** @class */ (function () {
    function ProductDeleteComponent(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.productService.readById(id).subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDeleteComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService["delete"](this.product.id).subscribe(function () {
            _this.productService.showMessage('produto excluido com sucesso');
            _this.router.navigate(['/products']);
        });
    };
    ProductDeleteComponent.prototype.cancel = function () {
        this.router.navigate(['/products']);
    };
    ProductDeleteComponent = __decorate([
        core_1.Component({
            selector: 'app-product-delete',
            templateUrl: './product-delete.component.html',
            styleUrls: ['./product-delete.component.css']
        })
    ], ProductDeleteComponent);
    return ProductDeleteComponent;
}());
exports.ProductDeleteComponent = ProductDeleteComponent;
