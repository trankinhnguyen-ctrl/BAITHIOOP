"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const Product_1 = require("./Product");
class Phone extends Product_1.Product {
    constructor(id, maSP, tenSP, soLuong, donGia, hinhAnh, os) {
        super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
        this._os = os;
    }
    get os() {
        return this._os;
    }
    calculateDiscount() {
        return this.donGia * 0.1;
    }
    displayInfo() {
        const tienGiam = this.calculateDiscount();
        const giaSauGiam = this.donGia - tienGiam;
        console.table([
            {
                Loai: "Phone",
                "Ma SP": this.maSP,
                "Ten SP": this.tenSP,
                "So luong": this.soLuong,
                "Don gia": this.donGia,
                "Tien giam/1 SP": tienGiam,
                "Gia sau giam": giaSauGiam,
                OS: this.os,
            },
        ]);
    }
}
exports.Phone = Phone;
//# sourceMappingURL=Phone.js.map