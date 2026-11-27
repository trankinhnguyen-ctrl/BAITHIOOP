import { Product } from "./Product";

export class Phone extends Product {
  private readonly _os: string;

  constructor(
    id: string,
    maSP: string,
    tenSP: string,
    soLuong: number,
    donGia: number,
    hinhAnh: string,
    os: string
  ) {
    super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
    this._os = os;
  }

  public get os(): string {
    return this._os;
  }

  public calculateDiscount(): number {
    return this.donGia * 0.1;
  }

  public displayInfo(): void {
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