//Scroll kembali keatas
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

//Ketik
var typed = new Typed(".auto-typed", {
  strings: ["Good", "Excellent", "Perfect"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//Scroll muncul satu persatu
window.addEventListener("scroll", muncul);
function muncul() {
  let elements = document.querySelectorAll(".naik");
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 5;

    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    } else {
      elements[i].classList.remove("tampil");
    }
  }
}

const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);
