function Student(name, numberID, gender) {
  this.name = name;
  this.numberID = numberID;
  this.gender = gender;  
  }
  
  var Name = prompt("Nhập tên học sinh: ");
  var NumberID = prompt("Nhập ID học sinh: ");
  var Gender = prompt("Nhập giới tính học sinh: ");
  var student1 = new Student(Name, NumberID, Gender);
  document.write("Thông tin học sinh: " + JSON.stringify(student1));
  
  