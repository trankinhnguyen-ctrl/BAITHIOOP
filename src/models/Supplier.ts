import { Product } from "./Product";

export class Supplier {
  private _id: string;
  private _supplierName: string;
  private _products: Product[];

  constructor(id: string, supplierName: string, products: Product[] = []) {
    this._id = id;
    this._supplierName = supplierName;
    this._products = [];

    for (const product of products) {
      this.addProduct(product);
    }
  }

  public get id(): string {
    return this._id;
  }

  public get supplierName(): string {
    return this._supplierName;
  }

  public get products(): Product[] {
    return [...this._products];
  }

  public addProduct(product: Product): void {
    const isDuplicate = this._products.some((item) => item.id === product.id);
    if (!isDuplicate) {
      this._products.push(product);
    }
  }

  public displaySupplierProducts(): void {
    console.log(`Nha cung cap: ${this.supplierName} (ID: ${this.id})`);

    if (this._products.length === 0) {
      console.log("  - Chua co san pham lien ket.");
      return;
    }

    for (const product of this._products) {
      console.log(`  - ${product.tenSP}`);
    }
  }
}