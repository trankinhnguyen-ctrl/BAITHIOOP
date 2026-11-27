import { Product } from "./Product";

export class Warehouse {
  private _warehouseName: string;
  private _products: Product[];

  constructor(warehouseName: string) {
    this._warehouseName = warehouseName;
    this._products = [];
  }

  public get warehouseName(): string {
    return this._warehouseName;
  }

  public get products(): Product[] {
    return [...this._products];
  }

  public addProduct(product: Product): void {
    const isDuplicate = this._products.some((item) => item.id === product.id);
    if (isDuplicate) {
      console.log(`San pham co ID "${product.id}" da ton tai trong kho.`);
      return;
    }

    this._products.push(product);
  }

  public removeProduct(productId: string): boolean {
    const index = this._products.findIndex((item) => item.id === productId);
    if (index === -1) {
      console.log(`Khong tim thay san pham co ID "${productId}" trong kho.`);
      return false;
    }

    this._products.splice(index, 1);
    return true;
  }

  public displayWarehouseInfo(): void {
    console.log(`Kho: ${this.warehouseName} | Tong so mat hang: ${this._products.length}`);

    if (this._products.length === 0) {
      console.log("  - Kho hien chua co san pham nao.");
      return;
    }

    for (const product of this._products) {
      product.displayInfo();
    }
  }
}