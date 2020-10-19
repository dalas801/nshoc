//slide
var swiper = new Swiper('.swiper-hero', {
    speed: 900,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiperNews = new Swiper('.swiper-news', {
    speed: 900,
    loop: true,
    slidesPerView:3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    320:{
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 3,
    
    
    },
    900: {
      slidesPerView: 3,
  
    }
  }
  });


  //menu fixed
  const header=document.getElementById("myHeader");
  window.onscroll=function(){
      myFunction()
  };
  function myFunction(){
      if(window.pageYOffset>header.offsetTop){
          header.classList.add('sticky');
      }
      else
      {
          header.classList.remove('sticky');

      }
  }

  //menu responsive
 
  var upper = document.getElementsByClassName('upper');
var middle = document.getElementsByClassName('middle');
var lower = document.getElementsByClassName('lower');

var tl = new TimelineLite({paused: true, reversed: true});

var x = window.matchMedia("(max-width: 768px)");

var navMain = document.querySelector(".nav-sec");
// var listItems = $('.nav-sec li');
// var listItems=document.querySelectorAll(".nav-item");
var menuButton = document.querySelector(".hamburger");
var toggle = true;


// function animations(){
//   if ($(window).width() < 768) {
//     var menuAnimation = new TimelineMax({paused:true});
//     var menuAnimationBack = new TimelineMax({paused:true, reversed: true});
    
// 		menuAnimation
//    .to(navMain, 1, {transform: "translate3d(0, 0, 0)",opacity:'1',ease: Power2.easeInOut },0.2)
//   .staggerFromTo(listItems, 1.3, {autoAlpha: 0,ease: Power2.easeInOut }, {autoAlpha: 1,ease: Power2.easeInOut },0.2,0.1);
    
    
// menuAnimationBack
// .to(navMain, 1.3, {transform: "translate3d(-100%, 0, 0)",opacity:'0', ease: Power4.easeIn},0.2)
// // .staggerFromTo(listItems, 1, {autoAlpha: 1,ease: Power2.easeInOut }, {autoAlpha: 0,ease: Power2.easeInOut },0.2,0.3);
// }

// else {
//   rotationOne.pause(0);
// }
// }
tl
  .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
  .to(middle, 0.5, {autoAlpha: 0}, 'start')
  .to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

menuButton.addEventListener("click",function(){


  tl.reversed() ? tl.play() : tl.reverse();

  toggle = !toggle;
  if(toggle === false) {
  
    navMain.className +=" reponsive";
  
  
  }
  else{ 
 
  navMain.classList.remove("reponsive");

}

});






// menuAnimation = new TimelineMax({paused:true}),
// toggle = true,
//  menuAnimationBack = new TimelineMax({paused:true, reversed: true});
//  menuAnimation
//  .to(navSec, 0.8, {width: '80%', className : "+=vertical", ease: Power2.easeInOut, transform: "translate3d(0,0,0)"},0);
// menuAnimationBack
// .to(navSec, 0.55, {width: 0, className : "+=skewback", ease: Power4.easeIn, transform: "translate3d(0,0,0)"},0);


// function resFunction(){

//   tl.reversed() ? tl.play() : tl.reverse();
//   toggle = !toggle;
//   toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
// }
// tl
//   .to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
//   .to(middle, 0.5, {autoAlpha: 0}, 'start')
//   .to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

 

//   var hamber=document.querySelector(".hamburger");
//   hamber.addEventListener("click",resFunction);


//product carousel
$('.gallery-card').imagesLoaded( function() {
  $("#exzoom").exzoom({
        autoPlay: false,
    });
  $("#exzoom").removeClass('hidden')
});


