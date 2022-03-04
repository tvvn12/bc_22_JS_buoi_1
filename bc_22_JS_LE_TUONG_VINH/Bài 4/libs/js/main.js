/**
 Bước 1: Đầu vào
 - Gán giá trị cho 2 biến chu vi và diện tích
 Bước 2: Xử lý
 - Tính chu vi = (Chiều dài + Chiều rộng)*2
 - Tính diện tích = Chiều dài * Chiều rộng;
 Bước 3: Hiển thị
 - Hiển thị kết quả chu vi và diện tích ra màn hình
 */
var chieu_dai = 20;
var chieu_rong = 5;
var chu_vi_hcn = (chieu_dai + chieu_rong)*2;
var dien_tich = chieu_dai *chieu_rong;
var Hien_thi_chu_vi = "Chu vi hình chữ nhật là: "+chu_vi_hcn;
var Hien_thi_dien_tich ="Diện tích hình chữ nhật là:" + dien_tich;
console.log(Hien_thi_chu_vi);
console.log(Hien_thi_dien_tich);
