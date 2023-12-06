    let a = 5;
    let b = 6;
    let c = 7;
    let p = (a+b+c)/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    S = Math.round(S * 100) / 100;
    document.write("The area of the triangle is: " + S);
