const showElementOnEnter = () => {
  const allFeatures = document.querySelectorAll("#feature");
  const title = document.querySelector(".recruiting-ecosystem__title");
  const subtitle = document.querySelector(".recruiting-ecosystem__subtitle");

  const tl = gsap.timeline();
  [...allFeatures].map((feature) => {
    tl.to(title, { duration: 0.5, opacity: 1 })
      .to(subtitle, { duration: 0.5, opacity: 1 })
      .to(feature, { duration: 0.5, opacity: 1 });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showElementOnEnter();
});
