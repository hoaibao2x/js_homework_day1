/**
 * Khối 1: Dữ liệu có sẵn (Input)
 *         soNhapVao
 * 
 * Khối 2: Các bước xử lý code
 * B1: Tạo biến so2KySo, soHangChuc, soDonVi, tongHaiKySo
 * B2: Gán giá trị cho biến so2KySo
 * B3: Lập công thức tính toán
 *     soHangChuc = Math.floor(so2KySo / 10)
 *     soDonVi = so2KySo % 10
 *     tongHaiKySo = soHangChuc + soDonVi
 * B4: Thông báo kết quả ở màn hình console.log
 * 
 * Khối 3: Kết quả mong đợi (Output)
 *         tongHaiKySo 
 **/

var so2KySo = 23;
var soHangChuc = 0;
var soDonVi = 0;
var tongHaiKySo = 0;

soHangChuc = Math.floor(so2KySo / 10);
soDonVi = so2KySo % 10;
tongHaiKySo = soHangChuc + soDonVi;

console.log('Tổng 2 ký số vừa nhập là', tongHaiKySo);