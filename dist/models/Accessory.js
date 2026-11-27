"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessory = void 0;
const Product_1 = require("./Product");
class Accessory extends Product_1.Product {
    constructor(id, maSP, tenSP, soLuong, donGia, hinhAnh, brand) {
        super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    calculateDiscount() {
        return this.donGia * 0.05;
    }
    displayInfo() {
        const tienGiam = this.calculateDiscount();
        const giaSauGiam = this.donGia - tienGiam;
        console.table([
            {
                Loai: "Accessory",
                "Ma SP": this.maSP,
                "Ten SP": this.tenSP,
                "So luong": this.soLuong,
                "Don gia": this.donGia,
                "Tien giam/1 SP": tienGiam,
                "Gia sau giam": giaSauGiam,
                Brand: this.brand,
            },
        ]);
    }
}
exports.Accessory = Accessory;
//# sourceMappingURL=Accessory.js.map