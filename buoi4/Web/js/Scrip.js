var blue = "Blue_";
var black = "Black_";
var gold = "G";
window.onload = function () {
  let m = document.getElementById("main");
  let imgs = document.querySelectorAll(".phu img");

  for (let im of imgs) {
    im.onclick = function () {
      m.src = this.src;
    };
  }
  let search = document.getElementById("timkiem");
  let products = document.getElementsByClassName("pro");
  key = search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      console.log(search.value);
    } 
  });

  let buttons = document.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach(function (btn, index) {
    btn.onclick = function () {
      imgs.forEach(function (img, index) {
        m.src = `/img/galaxys8/${btn.id}_1.jpg`;
        img.src = `/img/galaxys8/${btn.id}_${index}.jpg`;
      });
    };
  });
};
