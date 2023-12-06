document.write("Các số lẻ nhỏ hơn 100 là: ");
var result = "";
for(var i = 1; i < 100; i+=2){
    if(i === 5 || i === 7 || i === 93){
        continue;
    }
    else{
        document.write(i + " ");
    }
}