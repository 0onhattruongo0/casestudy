let xe = 0;
var anh = [
  "./anh/fadil.png",
  "./anh/luxa.jpg",
  "./anh/sa.jpg",

  "./anh/VinFastPresident1-1596525495-7226-1596526753_1200x0.jpg",
];
function changeimg() {
  if (xe == 4) {
    xe = 0;
  }
  document.getElementById("xe").src = anh[xe];
  xe++;
}
var anh1 = [
  "./anh/sa.jpg",
  "./anh/luxa.jpg",
  "./anh/fadil.png",
  "./anh/VinFastPresident1-1596525495-7226-1596526753_1200x0.jpg",
];
function changeimg2() {
  if (xe == 4) {
    xe = 0;
  }
  document.getElementById("xe").src = anh[xe];
  xe++;
}
