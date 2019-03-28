const carouselSlide4 = document.querySelector('.carousel-slide4');
const carouselImages4 = document.querySelectorAll('.carousel-slide4 img');

//button
const prevB4 = document.querySelector('#prevB4');
const nextB4 = document.querySelector('#nextB4');

//counter
let counter4 = 1;
const size4 = carouselImages4[0].clientWidth;

carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';

nextB4.addEventListener('click',()=>{
  if(counter4 >= carouselImages4.length-1) return;
  carouselSlide4.style.transition = "transform 0.4s ease-in-out";
  counter4++;
  carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
});

prevB4.addEventListener('click',()=>{
  if(counter4 <= 0) return;
  carouselSlide4.style.transition = "transform 0.4s ease-in-out";
  counter4--;
  carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
});

carouselSlide4.addEventListener('transitionend', () =>{
  if(carouselImages4[counter4].id === 'lastClone'){
    carouselSlide4.style.transition = "none";
    counter4 = carouselImages4.length-4;
    carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
  }
  if(carouselImages4[counter4].id === 'firstClone'){
    carouselSlide4.style.transition = "none";
    counter4 = carouselImages4.length-(carouselImages4.length-1);
    carouselSlide4.style.transform = 'translateX(' + (-size4 * counter4) + 'px)';
  }
});


