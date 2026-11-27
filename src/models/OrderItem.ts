import { Product } from "./Product";

export class OrderItem {
  private _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    if (typeof quantity !== "number" || Number.isNaN(quantity) || quantity <= 0) {
      throw new Error("quantity phai lon hon 0 va la so hop le.");
    }

    this._product = product;
    this._quantity = quantity;
  }

  public get product(): Product {
    return this._product;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public getAmount(): number {
    return this._quantity * this._product.donGia;
  }
}