const sliders = document.querySelectorAll(".slider"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  counter = document.getElementById("counter"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (i) => {
  counter.innerHTML = index + 1;
  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });
  sliders[i].classList.add("active");
};

const activeDote = (i) => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[i].classList.add("active");
};

const active = (id) => {
  activeDote(id);
  activeSlide(id);
};

const nextSlide = () => {
  if (index === sliders.length - 1) {
    index = 0;
    active(index);
  } else {
    index++;
    active(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = sliders.length - 1;
    active(index);
  } else {
    index--;
    active(index);
  }
};
dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;

    active(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
