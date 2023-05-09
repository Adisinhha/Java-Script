let _userdata = [
  { id: 1, name: "Adi", age: 20 },
  { id: 2, name: "Raj", age: 19 },
  { id: 3, name: "Aditya", age: 22 },
];
localStorage.setItem("userdata", JSON.stringify(_userdata));

let _retrivedata = JSON.parse(localStorage.getItem("userdata"));

console.log(_retrivedata);
