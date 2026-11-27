"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, maSP, tenSP, soLuong, donGia, hinhAnh) {
        this._id = id;
        this._maSP = maSP;
        this._tenSP = tenSP;
        this._soLuong = 0;
        this._donGia = 0;
        this._hinhAnh = hinhAnh;
        this.soLuong = soLuong;
        this.donGia = donGia;
    }
    get id() {
        return this._id;
    }
    get maSP() {
        return this._maSP;
    }
    get tenSP() {
        return this._tenSP;
    }
    get soLuong() {
        return this._soLuong;
    }
    set soLuong(value) {
        if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
            throw new Error("soLuong khong duoc nho hon 0 va phai la so hop le.");
        }
        this._soLuong = value;
    }
    get donGia() {
        return this._donGia;
    }
    set donGia(value) {
        if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
            throw new Error("donGia khong duoc nho hon 0 va phai la so hop le.");
        }
        this._donGia = value;
    }
    get hinhAnh() {
        return this._hinhAnh;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map