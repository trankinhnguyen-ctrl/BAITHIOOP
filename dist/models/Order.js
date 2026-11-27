"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderItem_1 = require("./OrderItem");
class Order {
    constructor(orderId) {
        this._orderId = orderId;
        this._items = [];
    }
    get orderId() {
        return this._orderId;
    }
    get items() {
        return [...this._items];
    }
    addItem(product, quantity) {
        const item = new OrderItem_1.OrderItem(product, quantity);
        this._items.push(item);
    }
    getTotalAmount() {
        return this._items.reduce((sum, item) => sum + item.getAmount(), 0);
    }
    displayOrder() {
        console.log(`Don hang #${this._orderId}`);
        if (this._items.length === 0) {
            console.log("  - Don hang chua co san pham.");
            console.log(`Tong tien don hang: 0`);
            return;
        }
        for (const item of this._items) {
            const thanhTien = item.getAmount();
            console.log(`  - Ma SP: ${item.product.maSP} | Ten SP: ${item.product.tenSP} | So luong: ${item.quantity} | Don gia: ${item.product.donGia} | Thanh tien: ${thanhTien}`);
        }
        console.log(`Tong tien don hang: ${this.getTotalAmount()}`);
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map