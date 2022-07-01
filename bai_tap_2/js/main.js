/**
 * Khối 1: Dữ liệu có sẵn (Input)
 * Nhập vào 5 số thực 
 * 
 * Khối 2: Các bước xử lí code
 * B1: Tạo biến num1, num2, num3, num4, num5, avg5Num, result
 * B2: Gán giá trị cho biến
 * B3: Lập công thức tính toán
 *     avg5Num = (num1 + num2 + num3 + num4 + num5) / 5
 * B4: Làm tròn kết quả đến số thập phân thứ 2 và gán vào biến mới
 *     result = avg5Num.toFixed(2);
 * B5: In kết quả ra màn hình console.log
 * 
 * Khối 3: Kết quả mong đợi (Output)
 * avg5Num
 *  */

var num1 = 3.2;
var num2 = 7.7;
var num3 = 2.5;
var num4 = 9.8;
var num5 = 5.4;

var avg5Num = (num1 + num2 + num3 + num4 + num5) / 5;
var result = parseFloat(avg5Num.toFixed(2));

console.log('Trung bình của tổng 5 số thực là ', result);