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

// touch nav-bar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
// end touch nav-bar

// scroll Rever on profile

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2000,
  delay: 450,
  reset:true
});

sr.reveal('.title-me',{delay:200,origin:'top'});
sr.reveal('.hero',{delay:500,origin:'left'});