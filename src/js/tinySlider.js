import {tns} from 'tiny-slider/src/tiny-slider';

const slider = tns({
  container: '#my-slider',
  slideBy: 1,
  items: 1,
  speed: 400,
  loop: false,
  nav: false,
  swipeAngle: false,
  controlsContainer: '#my-controls',
  responsive: {
    640: {
      items: 2,
      gutter: 10,
    },
    1000: {
      items: 3,
      gutter: 20,
    },
    1300: {
      items: 4,
      gutter: 30,
    },
  },
});
