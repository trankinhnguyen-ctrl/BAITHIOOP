"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const Product_1 = require("./Product");
class Laptop extends Product_1.Product {
    constructor(id, maSP, tenSP, soLuong, donGia, hinhAnh, ram, cpu) {
        super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
        this._ram = ram;
        this._cpu = cpu;
    }
    get ram() {
        return this._ram;
    }
    get cpu() {
        return this._cpu;
    }
    calculateDiscount() {
        return this.donGia * 0.15;
    }
    displayInfo() {
        const tienGiam = this.calculateDiscount();
        const giaSauGiam = this.donGia - tienGiam;
        console.table([
            {
                Loai: "Laptop",
                "Ma SP": this.maSP,
                "Ten SP": this.tenSP,
                "So luong": this.soLuong,
                "Don gia": this.donGia,
                "Tien giam/1 SP": tienGiam,
                "Gia sau giam": giaSauGiam,
                RAM: this.ram,
                CPU: this.cpu,
            },
        ]);
    }
}
exports.Laptop = Laptop;
//# sourceMappingURL=Laptop.js.map