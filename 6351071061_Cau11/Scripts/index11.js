    function reverse_num(n){ 
        n = n.toString()
        return n.split("").reverse().join("");
    }
    let num = 654321;
    window.alert("Số đảo ngược: " + reverse_num(num));