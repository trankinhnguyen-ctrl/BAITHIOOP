import { Product } from "./Product";

export class Laptop extends Product {
  private readonly _ram: string;
  private readonly _cpu: string;

  constructor(
    id: string,
    maSP: string,
    tenSP: string,
    soLuong: number,
    donGia: number,
    hinhAnh: string,
    ram: string,
    cpu: string
  ) {
    super(id, maSP, tenSP, soLuong, donGia, hinhAnh);
    this._ram = ram;
    this._cpu = cpu;
  }

  public get ram(): string {
    return this._ram;
  }

  public get cpu(): string {
    return this._cpu;
  }

  public calculateDiscount(): number {
    return this.donGia * 0.15;
  }

  public displayInfo(): void {
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