function validateYear(year) {
  if (isNaN(year) || year < 1) {
    alert("Năm không hợp lệ. Vui lòng nhập lại.");
    return false;
  }
  return true;
}

function getCan(year) {
  var can = ["Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm"];
  return can[year % 10];
}

function getChi(year) {
  var chi = ["Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất"];
  return chi[year % 12];
}

function calculateCanChi() {
  var year = document.getElementById("year").value;
  if (validateYear(year)) {
    var can = getCan(year);
    var chi = getChi(year);
    document.getElementById("result").innerHTML = "Năm " + year + " là năm " + can + " " + chi;
  }
}
