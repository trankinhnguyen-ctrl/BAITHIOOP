"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
class Supplier {
    constructor(id, supplierName, products = []) {
        this._id = id;
        this._supplierName = supplierName;
        this._products = [];
        for (const product of products) {
            this.addProduct(product);
        }
    }
    get id() {
        return this._id;
    }
    get supplierName() {
        return this._supplierName;
    }
    get products() {
        return [...this._products];
    }
    addProduct(product) {
        const isDuplicate = this._products.some((item) => item.id === product.id);
        if (!isDuplicate) {
            this._products.push(product);
        }
    }
    displaySupplierProducts() {
        console.log(`Nha cung cap: ${this.supplierName} (ID: ${this.id})`);
        if (this._products.length === 0) {
            console.log("  - Chua co san pham lien ket.");
            return;
        }
        for (const product of this._products) {
            console.log(`  - ${product.tenSP}`);
        }
    }
}
exports.Supplier = Supplier;
//# sourceMappingURL=Supplier.js.map