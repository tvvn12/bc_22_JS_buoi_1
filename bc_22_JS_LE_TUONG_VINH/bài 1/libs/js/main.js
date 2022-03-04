// Bước 1: Đầu vào
//     - Gán giá trị cho biến:
//         + Luong: Số lương được trả cho 1 ngày làm.
//         + So_ngay_lam: Số ngày làm được.
// Bước 2: Xử lý:
//     - Tạo biến So_Tien_Duoc_Nhan = Số ngày làm * Lương
// Bước 3: Hiển thị:
//     - Hiển thị Số tiền được nhận ra màn hình.

const Luong = 100000;
Format_Tien_Te = new Intl.NumberFormat("vn-VN");
var So_ngay_lam = 10;
var So_Tien_Duoc_Nhan = So_ngay_lam * Luong;
var Hien_Thi ="Số tiền bạn được nhận: " + Format_Tien_Te.format(So_Tien_Duoc_Nhan) + " VNĐ";
console.log(Hien_Thi);
