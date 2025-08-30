document.addEventListener("DOMContentLoaded", function() {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let bgp = document.getElementById("bg");
  let rgb1 = "#12345a";
  let rgb2 = "#16b45a";
  let nvalue = "";

  function hexgen() {
    let values = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    nvalue = color;
  }

  function change() {
    hexgen();
    btn1.style.backgroundColor = nvalue;
    btn1.textContent = nvalue;
    rgb1 = nvalue;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    bgp.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
  }

  function changee() {
    hexgen();
    btn2.style.backgroundColor = nvalue;
    btn2.textContent = nvalue;
    rgb2 = nvalue;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    bgp.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
  }

  btn1.addEventListener("click", change);
  btn2.addEventListener("click", changee);
  bgp.addEventListener("click", function() {
    navigator.clipboard.writeText(bgp.innerText);
    alert("copied");
  });
});
