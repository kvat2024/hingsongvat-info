hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

 
const favoriteColors = ["#3a86ff", "#00b4d8", "#00b4d8", "#ff0000"]; 

function getRandomFavoriteColor() {
    return favoriteColors[Math.floor(Math.random() * favoriteColors.length)];
}

function changeTextColor() {
    let randomColor = getRandomFavoriteColor();
    let spans = document.querySelectorAll('.title-me span');
    spans.forEach(span => {
        span.style.color = randomColor;
    });
}

setInterval(changeTextColor, 100); 