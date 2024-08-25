// touch no zoom in responsive
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);
// end touch no zoom in responsive
// logo style
const text = "HING SONGVAT";
let index = 0;
const speed = 200; 

function typeWriter() {
  if (index < text.length) {
    document.getElementById("logo").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
// end style of logo

// touch nav-bar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
// end touch nav-bar




