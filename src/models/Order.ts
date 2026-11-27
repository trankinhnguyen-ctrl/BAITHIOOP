import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class Order {
  private _orderId: number;
  private _items: OrderItem[];

  constructor(orderId: number) {
    this._orderId = orderId;
    this._items = [];
  }

  public get orderId(): number {
    return this._orderId;
  }

  public get items(): OrderItem[] {
    return [...this._items];
  }

  public addItem(product: Product, quantity: number): void {
    const item = new OrderItem(product, quantity);
    this._items.push(item);
  }

  public getTotalAmount(): number {
    return this._items.reduce((sum, item) => sum + item.getAmount(), 0);
  }

  public displayOrder(): void {
    console.log(`Don hang #${this._orderId}`);

    if (this._items.length === 0) {
      console.log("  - Don hang chua co san pham.");
      console.log(`Tong tien don hang: 0`);
      return;
    }

    for (const item of this._items) {
      const thanhTien = item.getAmount();
      console.log(
        `  - Ma SP: ${item.product.maSP} | Ten SP: ${item.product.tenSP} | So luong: ${item.quantity} | Don gia: ${item.product.donGia} | Thanh tien: ${thanhTien}`
      );
    }

    console.log(`Tong tien don hang: ${this.getTotalAmount()}`);
  }
}