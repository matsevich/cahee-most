function myMenu() {
  var x = document.getElementById("navigate");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}