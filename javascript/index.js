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
document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("#logo span");
  let index = 0;

  function showNextSpan() {
    if (index < spans.length) {
      spans[index].classList.remove("hidden");
      index++;
      setTimeout(showNextSpan, 500); // Adjust the speed here
    }
  }

  showNextSpan();
});
// end style of logo

// touch nav-bar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
// end touch nav-bar
