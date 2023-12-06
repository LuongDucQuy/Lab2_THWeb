function convert(n){
    let sum = 0;
    while(n > 0){
        sum += n;
        n = Math.floor(n/2);
    }
    return sum;
}

var n = parseInt(prompt("Nhập số nguyên dương: "));
window.alert("Tổng: " + convert(n));