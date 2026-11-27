"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(product, quantity) {
        if (typeof quantity !== "number" || Number.isNaN(quantity) || quantity <= 0) {
            throw new Error("quantity phai lon hon 0 va la so hop le.");
        }
        this._product = product;
        this._quantity = quantity;
    }
    get product() {
        return this._product;
    }
    get quantity() {
        return this._quantity;
    }
    getAmount() {
        return this._quantity * this._product.donGia;
    }
}
exports.OrderItem = OrderItem;
//# sourceMappingURL=OrderItem.js.map