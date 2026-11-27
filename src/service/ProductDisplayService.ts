import { Product } from "../models/Product";
import { Laptop } from "../models/Laptop";
import { Phone } from "../models/Phone";
import { Accessory } from "../models/Accessory";

export function getProductType(product: Product): string {
  if (product instanceof Laptop) {
    return "Laptop";
  }
  if (product instanceof Phone) {
    return "Phone";
  }
  if (product instanceof Accessory) {
    return "Accessory";
  }
  return "Product";
}

export function getDiscountRateLabel(product: Product): string {
  if (product instanceof Laptop) {
    return "15%";
  }
  if (product instanceof Phone) {
    return "10%";
  }
  if (product instanceof Accessory) {
    return "5%";
  }
  return "0%";
}

export function getProductDetail(product: Product): string {
  if (product instanceof Laptop) {
    return `RAM: ${product.ram} | CPU: ${product.cpu}`;
  }

  if (product instanceof Phone) {
    return `OS: ${product.os}`;
  }

  if (product instanceof Accessory) {
    return `Brand: ${product.brand}`;
  }

  return "Không có chi tiết";
}