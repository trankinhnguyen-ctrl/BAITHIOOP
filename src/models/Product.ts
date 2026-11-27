export abstract class Product {
  private _id: string;
  private _maSP: string;
  private _tenSP: string;
  private _soLuong: number;
  private _donGia: number;
  private _hinhAnh: string;

  constructor(
    id: string,
    maSP: string,
    tenSP: string,
    soLuong: number,
    donGia: number,
    hinhAnh: string
  ) {
    this._id = id;
    this._maSP = maSP;
    this._tenSP = tenSP;
    this._soLuong = 0;
    this._donGia = 0;
    this._hinhAnh = hinhAnh;

    this.soLuong = soLuong;
    this.donGia = donGia;
  }

  public get id(): string {
    return this._id;
  }

  public get maSP(): string {
    return this._maSP;
  }

  public get tenSP(): string {
    return this._tenSP;
  }

  public get soLuong(): number {
    return this._soLuong;
  }

  public set soLuong(value: number) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
      throw new Error("soLuong khong duoc nho hon 0 va phai la so hop le.");
    }
    this._soLuong = value;
  }

  public get donGia(): number {
    return this._donGia;
  }

  public set donGia(value: number) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
      throw new Error("donGia khong duoc nho hon 0 va phai la so hop le.");
    }
    this._donGia = value;
  }

  public get hinhAnh(): string {
    return this._hinhAnh;
  }

  public abstract calculateDiscount(): number;
  public abstract displayInfo(): void;
}