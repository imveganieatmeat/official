const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

//button
const prevB2 = document.querySelector('#prevB2');
const nextB2 = document.querySelector('#nextB2');

//counter
let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

nextB2.addEventListener('click',()=>{
  if(counter2 >= carouselImages2.length-2) return;
  carouselSlide2.style.transition = "transform 0.4s ease-in-out";
  counter2++;
  carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

prevB2.addEventListener('click',()=>{
  if(counter2 <= 0) return;
  carouselSlide2.style.transition = "transform 0.4s ease-in-out";
  counter2--;
  carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

carouselSlide2.addEventListener('transitionend', () =>{
  if(carouselImages2[counter2].id === 'lastClone'){
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length-2;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
  }
  if(carouselImages2[counter2].id === 'firstClone'){
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length-(carouselImages2.length-2);
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
  }
});
