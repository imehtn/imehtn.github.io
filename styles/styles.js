const track = document.querySelector('.track');
const totalWidth = track.scrollWidth / 2; // half = one set
document.documentElement.style.setProperty(
  '--scroll-distance', 
  `-${totalWidth}px`
);
