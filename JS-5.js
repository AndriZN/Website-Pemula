var typed = new Typed("#element", {
  strings: ["PakBos", "Is The King"],
  typeSpeed: 300,
  loop: true,
  backspeed: 100,
  showCursor: false,
  backDelay: 1000,
});

// Scroll UP 
const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }
}

