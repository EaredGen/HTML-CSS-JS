let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots')[0],
    slides = document.getElementsByClassName('slide'),
    prevBtn = document.getElementsByClassName('leftButton'),
    nextBtn = document.getElementsByClassName('rightButton'),
    slideIndex = 1;
    showSlides(slideIndex);

function showSlides(n) {
    if (n<1){
        slideIndex = slides.length;
    }else if(n>slides.length){
        slideIndex = 1;
    }

    for(let i=0; i < slides.length;i++){
        slides[i].style.display = 'none';
    }

    for(let i=0; i < dots.length;i++){
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function nextSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

prevBtn.onclick = function() {
    nextSlide(-1);
}

nextBtn.onclick = function() {
    nextSlide(+1);
}

dotsArea.onclick = function(e) {
    for(let i = 0; i < dots.length +1; i++){
        if(e.target.classList.containts('dots-item') && e.target == dots[i - 1]){
            currentSlide(i);
        }
    }
}