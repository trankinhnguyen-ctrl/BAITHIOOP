import { Product } from "./Product";

export class Accessory extends Product {
  private readonly _brand: string;

  constructor(
    id: string,
    maSP: string,
    tenSP: string,
    soLuong: number,
    donGia: number,
    hinhAnh: string,
    brand: string
  ) {
    super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
    this._brand = brand;
  }

  public get brand(): string {
    return this._brand;
  }

  public calculateDiscount(): number {
    return this.donGia * 0.05;
  }

  public displayInfo(): void {
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