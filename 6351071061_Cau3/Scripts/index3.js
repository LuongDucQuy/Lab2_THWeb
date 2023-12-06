    var a = prompt("Nhập a: ");
    var b = prompt("Nhập b: ");
    var c = prompt("Nhập c: ");
    if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
        var max = Math.max(a, b, c);
        window.alert("Số lớn nhất là: " + max);
    }
    else{
        window.alert("Số không hợp lệ!");
    }
