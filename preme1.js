const carouselSlide1 = document.querySelector('.carousel-slide1');
const carouselImages1 = document.querySelectorAll('.carousel-slide1 img');

//button
const prevB1 = document.querySelector('#prevB1');
const nextB1 = document.querySelector('#nextB1');

//counter
let counter1 = 1;
const size1 = carouselImages1[0].clientWidth;

carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';

nextB1.addEventListener('click',()=>{
  if(counter1 >= carouselImages1.length-1) return;
  carouselSlide1.style.transition = "transform 0.4s ease-in-out";
  counter1++;
  carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});

prevB1.addEventListener('click',()=>{
  if(counter1 <= 0) return;
  carouselSlide1.style.transition = "transform 0.4s ease-in-out";
  counter1--;
  carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});

carouselSlide1.addEventListener('transitionend', () =>{
  if(carouselImages1[counter1].id === 'lastClone'){
    carouselSlide1.style.transition = "none";
    counter1 = carouselImages1.length-2;
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
  }
  if(carouselImages1[counter1].id === 'firstClone'){
    carouselSlide1.style.transition = "none";
    counter1 = carouselImages1.length-(carouselImages1.length-1);
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
  }
});
