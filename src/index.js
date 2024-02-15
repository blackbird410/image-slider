import "./style.css";
import i1 from "./img/image1.png";
import i2 from "./img/image5.png";
import i3 from "./img/image5.png";
import i4 from "./img/albert.jpg";
import i5 from "./img/tim-toomey.jpg";
import i6 from "./img/davey-gravy.jpg";
import i7 from "./img/amadeo-valar.jpg";
import i8 from "./img/clark-douglas.jpg";
import i9 from "./img/lee-myungseong.jpg";
import i10 from "./img/mgg-vitchakorn.jpg";
import i11 from "./img/the-storyteller.jpg";
import i12 from "./img/pablo-merchan-montes.jpg";
import i13 from "./img/alexandru-bogdan-ghita.jpg";

const displayMain = () => {
  const wrapper = document.createElement("div");
  const imageWrapper = document.createElement("div");
  const images = getImages();
  const arrowLeftWrapper = document.createElement("div");
  const arrowRightWrapper = document.createElement("div");
  const navCircles = document.createElement("div");
  const arrowLeft = document.createElement("ion-icon");
  const arrowRight = document.createElement("ion-icon");

  wrapper.classList.add("slider-wrapper");
  imageWrapper.classList.add("image-wrapper");
  arrowLeftWrapper.classList.add("arrow");
  arrowRightWrapper.classList.add("arrow");
  navCircles.classList.add("nav-circles-wrapper");
  arrowLeft.setAttribute("name", "arrow-back-circle-outline");
  arrowRight.setAttribute("name", "arrow-forward-circle-outline");

  arrowLeftWrapper.appendChild(arrowLeft);
  arrowRightWrapper.appendChild(arrowRight);

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

const getImages = () => {
  let list = [];
  images.forEach((i) => {
    const e = document.createElement("img");
    e.src = i;
    list.push(e);
  });

  return list;
};

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13];

displayMain();
