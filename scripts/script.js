let left = document.querySelector('.leftButton'),
    rigth = document.querySelector('.rightButton'),
    slidesArea = document.querySelector('.scrollPictures'),
    dots = document.querySelectorAll('.dots-item'),
    dotsArea = document.querySelector('.dots'),
    leftIndent = 0;

let scrollFunc = (n) => {
  leftIndent += n;
  
  if (leftIndent <= -300) {
    leftIndent = 0;
  } else if (leftIndent > 0) {
    leftIndent = -200;
  }
  
  slidesArea.style.left = `${leftIndent}%`;
  
  for (let dot of dots) {
    dot.classList.remove('dot-active');
  }
  dots[-leftIndent / 100].classList.add('dot-active');
}
let dotScrollFunc = (n) => {
  scrollFunc(leftIndent = -(n * 100 / 2));
}

left.addEventListener('click', () => {
  scrollFunc(100);
});
rigth.addEventListener('click', () => {
  scrollFunc(-100);
});
dotsArea.addEventListener('click', (e) => {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains('dot') && e.target == dots[i]) {
      dotScrollFunc(i);
    }
  }
});