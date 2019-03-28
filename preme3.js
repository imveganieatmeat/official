const carouselSlide3 = document.querySelector('.carousel-slide3');
const carouselImages3 = document.querySelectorAll('.carousel-slide3 img');

//button
const prevB3 = document.querySelector('#prevB3');
const nextB3 = document.querySelector('#nextB3');

//counter
let counter3 = 1;
const size3 = carouselImages3[0].clientWidth;

carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';

nextB3.addEventListener('click',()=>{
  if(counter3 >= carouselImages3.length-1) return;
  carouselSlide3.style.transition = "transform 0.4s ease-in-out";
  counter3++;
  carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});

prevB3.addEventListener('click',()=>{
  if(counter3 <= 0) return;
  carouselSlide3.style.transition = "transform 0.4s ease-in-out";
  counter3--;
  carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});

carouselSlide3.addEventListener('transitionend', () =>{
  if(carouselImages3[counter3].id === 'lastClone'){
    carouselSlide3.style.transition = "none";
    counter3 = carouselImages3.length-2;
    carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
  }
  if(carouselImages3[counter3].id === 'firstClone'){
    carouselSlide3.style.transition = "none";
    counter3 = carouselImages3.length-(carouselImages3.length-1);
    carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
  }
});
