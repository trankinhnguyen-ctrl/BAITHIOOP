"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
class Warehouse {
    constructor(warehouseName) {
        this._warehouseName = warehouseName;
        this._products = [];
    }
    get warehouseName() {
        return this._warehouseName;
    }
    get products() {
        return [...this._products];
    }
    addProduct(product) {
        const isDuplicate = this._products.some((item) => item.id === product.id);
        if (isDuplicate) {
            console.log(`San pham co ID "${product.id}" da ton tai trong kho.`);
            return;
        }
        this._products.push(product);
    }
    removeProduct(productId) {
        const index = this._products.findIndex((item) => item.id === productId);
        if (index === -1) {
            console.log(`Khong tim thay san pham co ID "${productId}" trong kho.`);
            return false;
        }
        this._products.splice(index, 1);
        return true;
    }
    displayWarehouseInfo() {
        console.log(`Kho: ${this.warehouseName} | Tong so mat hang: ${this._products.length}`);
        if (this._products.length === 0) {
            console.log("  - Kho hien chua co san pham nao.");
            return;
        }
        for (const product of this._products) {
            product.displayInfo();
        }
    }
}
exports.Warehouse = Warehouse;
//# sourceMappingURL=Warehouse.js.map