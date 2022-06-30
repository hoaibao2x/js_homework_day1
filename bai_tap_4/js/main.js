/**
 * Khối 1: Dữ liệu có sẵn (Input)
 *         chieuDai, chieuRong
 * 
 * Khối 2: Các bước xử lý code
 * B1: Tạo biến chieuDai, chieuRong, chuVi, dienTich
 * B2; Gán giá trị cho chieuDai, chieuRong
 * B3: Lập công thức tính toán
 *      chuVi = (chieuDai + chieuRong) / 2
 *      dienTich = chieuDai * chieuRong
 * B4: Thông báo kết quả ra màn hình console.log
 * 
 * Khối 3: Kết quả mong đợi (Output)
 *          chuVi, dienTich
 **/

var chieuDai = 8;
var chieuRong = 3;
var chuVi = 0;
var dienTich = 0;

chuVi = (chieuDai + chieuRong) / 2;
dienTich = chieuDai * chieuRong;

console.log('Chu vi hình chữ nhật là', chuVi);
console.log('Diện tích hình chữ nhật là', dienTich);