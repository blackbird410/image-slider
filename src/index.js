import "./style.css";
import i1 from "./img/albert.jpg";
import i2 from "./img/tim-toomey.jpg";
import i3 from "./img/davey-gravy.jpg";
import i4 from "./img/amadeo-valar.jpg";
import i5 from "./img/clark-douglas.jpg";
import i6 from "./img/lee-myungseong.jpg";
import i7 from "./img/the-storyteller.jpg";
import i8 from "./img/pablo-merchan-montes.jpg";
import i9 from "./img/alexandru-bogdan-ghita.jpg";

const displayMain = () => {
  const wrapper = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const arrowLeftWrapper = document.createElement("div");
  const arrowRightWrapper = document.createElement("div");
  const navCircles = document.createElement("div");
  const arrowLeft = document.createElement("ion-icon");
  const arrowRight = document.createElement("ion-icon");

  wrapper.classList.add("slider-wrapper");
  imageWrapper.classList.add("image-wrapper");
  arrowLeftWrapper.classList.add("arrow", "previous");
  arrowRightWrapper.classList.add("arrow", "next", "active");
  navCircles.classList.add("nav-circles-wrapper");
  arrowLeft.setAttribute("name", "arrow-back-circle-outline");
  arrowRight.setAttribute("name", "arrow-forward-circle-outline");

  arrowLeftWrapper.appendChild(arrowLeft);
  arrowRightWrapper.appendChild(arrowRight);

  arrowLeftWrapper.addEventListener("click", previousImage);
  arrowRightWrapper.addEventListener("click", nextImage);

  imageWrapper.appendChild(images[0]);

  for (let i = 0; i < 4; i += 1) {
    const circle = document.createElement("div");
    circle.classList.add("nav-circle");

    if (!i) circle.classList.add("active");

    navCircles.appendChild(circle);
  }

  wrapper.appendChild(arrowLeftWrapper);
  wrapper.appendChild(imageWrapper);
  wrapper.appendChild(arrowRightWrapper);
  wrapper.appendChild(navCircles);
  document.body.appendChild(wrapper);
};

const updateImage = (i) => {
  document.querySelector("img").remove();
  document.querySelector(".image-wrapper").appendChild(i);

  const previousArrow = document.querySelector(".arrow.previous");
  const nextArrow = document.querySelector(".arrow.next");

  if (imageIndex > 0) previousArrow.classList.add("active");
  else previousArrow.classList.remove("active");

  if (imageIndex < images.length - 1) nextArrow.classList.add("active");
  else nextArrow.classList.remove("active");

  updateIndicator();
};

const updateIndicator = () => {
  const circles = document.querySelectorAll(".nav-circle");
  Array.from(circles).forEach((circle) => {
    circle.classList.remove("active");
  });

  const activeCircle = !imageIndex ? 1 : Math.ceil((imageIndex + 1) / 4) + 1;
  document
    .querySelector(`.nav-circle:nth-of-type(${activeCircle})`)
    .classList.add("active");
};

const previousImage = (e) => {
  if (e.currentTarget.classList.contains("active")) {
    imageIndex -= 1;
    updateImage(images[imageIndex]);
  }
};

const nextImage = (e) => {
  if (e.currentTarget.classList.contains("active")) {
    imageIndex += 1;
    updateImage(images[imageIndex]);
  }
};

const getImages = () => {
  let list = [];
  imageList.forEach((i) => {
    const e = document.createElement("img");
    e.src = i;
    list.push(e);
  });

  return list;
};

const imageList = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
let imageIndex = 0;
const images = getImages();

displayMain();
