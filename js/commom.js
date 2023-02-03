const opacityTransition = (target, opacity, transition) => {
  target.style.opacity = opacity;
  target.style.transition = transition;
}
const opacityTransitionDelay = (target, opacity, transition, transitionDelay) => {
  target.style.opacity = opacity;
  target.style.transition = transition;
  target.style.transitionDelay = transitionDelay;
}
const menuSlider = (target, width, transition) => {
  target.style.width = width;
  target.style.transition = transition;
};

