let year = prompt("Nhập năm cần kiểm tra:");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    document.write(year + " là năm nhuận.");
} else {
    document.write(year + " không phải là năm nhuận.");
}
