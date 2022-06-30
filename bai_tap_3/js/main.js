/**
 * Khối 1: Dữ liệu có sẵn (Input)
 *         1 USD = 23.500
 * 
 * Khối 2: Các bước xử lí code
 * B1: Tạo biến usdCur, calc, vndCur
 * B2: Gán giá trị cho biến usdCur
 * B3: Lập công thức tính toán
 *     calc = usdCur * 23.500
 * B4: Làm tròn kết quả, gán vào biến vndCur
 *     vndCur = calc.toFixed(2);
 * B5: Thông báo kết quả ra màn hình console.log
 * 
 * Khối 3: Kết quả mong đợi (Output)
 *         vndCur
 *  */

var usdCur = 5;
var calc = 0;
var vndCur = 0;

calc = usdCur * 23500;
vndCur = calc.toFixed(2);

console.log(usdCur, 'USD sẽ tương đương', parseFloat(vndCur), 'VNĐ');