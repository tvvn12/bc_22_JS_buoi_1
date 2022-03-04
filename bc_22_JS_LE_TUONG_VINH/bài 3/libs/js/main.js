/*
Bước 1: Đầu vào
- Gán giá trị cho biến Gia_USD là 23500
- Gán giá trị cho biến USD bằng số tiền(USD) muốn quy đổi
Bước 2: Xử lý
- Lấy giá trị USD * giá của USD tại Việt Nam
Bước 3: Hiển thị kết quả ra màn hình
 */
const Gia_USD = 23500;
var USD = 4;
var Tien_quy_doi = Gia_USD * USD;
var format_money = Intl.NumberFormat("vn-VN");
var Hien_thi= "Giá của USD quy ra tiền Vn là : " + format_money.format(Tien_quy_doi) +" VNĐ";
console.log(Hien_thi);