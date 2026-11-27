import { Accessory } from "./models/Accessory";
import { Laptop } from "./models/Laptop";
import { Order } from "./models/Order";
import { Phone } from "./models/Phone";
import { Product } from "./models/Product";
import { Supplier } from "./models/Supplier";
import { Warehouse } from "./models/Warehouse";
import { getProductType, getDiscountRateLabel, getProductDetail} from "./service/ProductDisplayService";


// 1. Khởi tạo 5 sản phẩm demo (1 Laptop, 2 Phone, 2 Accessory)
const laptopDell = new Laptop(
  "1",
  "SP001",
  "Laptop Dell",
  5,
  15000000,
  "laptop-dell.jpg",
  "16GB",
  "Core i5"
);

const iphone15 = new Phone(
  "2",
  "SP002",
  "iPhone 15",
  10,
  25000000,
  "iphone-15.jpg",
  "iOS"
);

const samsungS24 = new Phone(
  "3",
  "SP003",
  "Samsung S24",
  8,
  22000000,
  "samsung-s24.jpg",
  "Android"
);

const taiNgheSony = new Accessory(
  "4",
  "SP004",
  "Tai nghe Sony",
  20,
  3000000,
  "tai-nghe-sony.jpg",
  "Sony"
);

const banPhimKeychron = new Accessory(
  "5",
  "SP005",
  "Bàn phím Keychron",
  15,
  2500000,
  "ban-phim-keychron.jpg",
  "Keychron"
);

const products: Product[] = [
  laptopDell,
  iphone15,
  samsungS24,
  taiNgheSony,
  banPhimKeychron,
];

// Danh sách sản phẩm
console.log("=== DANH SACH SAN PHAM ===");
console.table(
  products.map((product) => ({
    "Mã sản phẩm": product.maSP,
    "Tên sản phẩm": product.tenSP,
    Loại: getProductType(product),
    "Số lượng": product.soLuong,
    "Đơn giá": product.donGia,
  }))
);

// 2. Polymorphism và giảm giá
console.log("=== POLYMORPHISM & GIAM GIA ===");

console.table(
  products.map((product) => {
    const tienGiam = product.calculateDiscount();
    return {
      "Mã SP": product.maSP,
      "Tên SP": product.tenSP,
      "Loại": getProductType(product),
      "Chi tiết": getProductDetail(product),
      "Số lượng": product.soLuong,
      "Đơn giá": product.donGia,
      "Giảm (%)": getDiscountRateLabel(product),
      "Tiền giảm/1 SP": tienGiam,
      "Giá sau giảm": product.donGia - tienGiam,
    };
  })
);
// 3. Supplier & Association
const dellVietnam = new Supplier("SUP-1", "Dell Việt Nam");
const appleVietnam = new Supplier("SUP-2", "Apple Việt Nam");

dellVietnam.addProduct(laptopDell);
appleVietnam.addProduct(iphone15);

const suppliers = [dellVietnam, appleVietnam];
console.log("=== NHA CUNG CAP & SAN PHAM LIEN KET ===");
console.table(
  suppliers.flatMap((supplier) =>
    supplier.products.length > 0
      ? supplier.products.map((product) => ({
          "Mã NCC": supplier.id,
          "Tên nhà cung cấp": supplier.supplierName,
          "Mã sản phẩm": product.maSP,
          "Tên sản phẩm": product.tenSP,
        }))
      : [
          {
            "Mã NCC": supplier.id,
            "Tên nhà cung cấp": supplier.supplierName,
            "Mã sản phẩm": "-",
            "Tên sản phẩm": "(Chưa có sản phẩm liên kết)",
          },
        ]
  )
);

// 4. Warehouse & Aggregation
const warehouse = new Warehouse("Kho CNTT Đà Nẵng");
for (const product of products) {
  warehouse.addProduct(product);
}

console.log(`=== KHO HANG: ${warehouse.warehouseName} ===`);
console.table(
  warehouse.products.map((product) => ({
    "Mã sản phẩm": product.maSP,
    "Tên sản phẩm": product.tenSP,
    Loại: getProductType(product),
    "Số lượng": product.soLuong,
    "Đơn giá": product.donGia,
  }))
);

// 5. Order & Composition (#101)
const order101 = new Order(101);
order101.addItem(laptopDell, 2);
order101.addItem(iphone15, 1);
order101.addItem(taiNgheSony, 5);

console.log(`=== DON HANG #${order101.orderId} ===`);
console.table(
  order101.items.map((item) => ({
    "Mã sản phẩm": item.product.maSP,
    "Tên sản phẩm": item.product.tenSP,
    "Số lượng": item.quantity,
    "Đơn giá": item.product.donGia,
    "Thành tiền": item.getAmount(),
  }))
);
console.log(`Tổng tiền đơn hàng #${order101.orderId}: ${order101.getTotalAmount()}`);