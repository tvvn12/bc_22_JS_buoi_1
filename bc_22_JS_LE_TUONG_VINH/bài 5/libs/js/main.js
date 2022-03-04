/**
 Bước 1:Đầu vào
 - Gán giá trị cho biến "So"
 Bước 2: Xử lý
 - Tách số hàng đơn vị bằng hàm Math.floor( "Số muốn tách" % 10 )
 - Tách số hàng chục bằng hàm Math.floor("Số muốn tách" / 10)
 Bước 3: Hiển thị kết quả ra màn hình

 */


var So = 12;
var So_hang_don_vi =Math.floor(So%10);
var So_hang_chuc =Math.floor(So/10)
var Tinh_tong_hai_ky_so = So_hang_don_vi+So_hang_chuc;
var Hien_thi = "Giá trị của hai ký số sau khi đc tách là: " +Tinh_tong_hai_ky_so;
console.log(Hien_thi);

