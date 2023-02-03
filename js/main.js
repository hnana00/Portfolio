AOS.init({});

const icon = document.querySelectorAll('#home > span');

window.addEventListener('load', ( )=> {
  opacityTransitionDelay(icon[0], '1', '2s', '1s');
  opacityTransitionDelay(icon[1], '1', '2s', '1s');
});

// logo 애니메이션 Delay
const logo = document.querySelectorAll('#logo > span');

for(i = 0; i < logo.length; i++) {
  logo[i].style.animationDelay = '.' + i + 's';
  if(i === 3) {
    logo[3].style.marginLeft = '.5vw';
  }
  if(i === 5) {
    logo[5].style.marginRight = '.5vw';
  }
}

// 햄버거 클릭시 nav가 나타남
const botton = document.querySelector('#Hamburger');
const bottons = document.querySelectorAll('#Hamburger > div');
const ul = document.querySelector('header ul');

window.addEventListener('load', () => {
  ul.style.width = '0';
})
let on = true;
botton.addEventListener('click', () => {
  if(on) {
    ul.style.width = '100%';
    bottons[0].style.transform = 'translateY(8px) rotate(45deg)';
    bottons[1].style.opacity = '0';
    bottons[2].style.transform = 'translateY(-10px) rotate(-45deg)';
    on = false;
  } else {
    ul.style.width = '0';
    bottons[0].style.transform = 'translateY(0) rotate(0)';
    bottons[1].style.opacity = '1';
    bottons[2].style.transform = 'translateY(0) rotate(0)';
    on = true;
  }
});


// Portfolio set ************
// 무한 슬라이더
const prve = document.querySelector('#btn div:nth-child(1)'),
      next = document.querySelector('#btn div:nth-child(2)'),
      slides = document.querySelector('#contents > ul'),
      slide = document.querySelectorAll('#contents > ul li'),
      slideCont = slide.length,
      slideWidth = '65';
let currentIdx = 0;
      
makeCloneset();

function makeCloneset() {
  // ul의 뒤로 복제
  for(i = 0; i < slideCont; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    makeClone();
    function makeClone() {
      // 해상도가 930px 이상이면 복제
      if (matchMedia("screen and (min-width:931px)").matches) { 
        slides.appendChild(cloneSlide);
      } else {
        cloneSlide.remove();
      }
    };
    window.addEventListener('resize', function() {
      makeClone();
    });
  }

  // ul 앞으로 복제
  for(i = slideCont-1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    makeClone();
    function makeClone() {
      // 해상도가 930px 이상이면 복제
      if (matchMedia("screen and (min-width:931px)").matches) { 
        slides.prepend(cloneSlide);
      } else {
        cloneSlide.remove();
      }
    };
    window.addEventListener('resize', function() {
      makeClone();
    });
  }
};
updateWidth();
setInitialPos();
setTimeout(() => {
  slides.classList.add('transition');
}, 100);

// 복제된 슬라이더 갯수 만큼 ul의 너비를 정해줌
function updateWidth() {
  const currentSlide = document.querySelectorAll('#contents > ul li'),
        newSlideCount = currentSlide.length;
        
  slides.style.width = slideWidth * newSlideCount + 'vw';
};

// 복제된 자식이 아닌 원래의 자식의 위치로 이동
function setInitialPos() {
  if (matchMedia("screen and (max-width:930px)").matches) { 
    slides.style.transform = 'translateX(' + 0 + ')';
    slides.style.width = slideWidth + 'vw';
  } else {
    const translateValue = -slideWidth * slideCont + 'vw';
    slides.style.transform = 'translateX(' + translateValue + ')';
    updateWidth();
  }
}

next.addEventListener('click', () => {
  moveSlide(currentIdx + 1);
});
prve.addEventListener('click', () => {
  moveSlide(currentIdx - 1);
});
function moveSlide(num) {
  slides.style.marginLeft = -num * slideWidth + 'vw';
  currentIdx = num;
  if(currentIdx === slideCont || currentIdx === -slideCont) {
    setTimeout(() => {
      slides.classList.remove('transition');
      slides.style.marginLeft = '0';
      currentIdx = 0;
    }, 1000);
    setTimeout(() => {
      slides.classList.add('transition');
    }, 1100);
  }
};

window.addEventListener('resize', function() {
  setInitialPos();
});


// Design set ************
// 클릭 시 팝업
const click_img = document.querySelectorAll('#Design #content li');
const show_img = document.querySelectorAll('#pop_img li .click_img');
const img = document.querySelectorAll('#pop_img li .click_img img');

click_img.forEach(function (click_img) {
  click_img.addEventListener('click', function() {
    let click_img_Value = Number(this.dataset.tab);
    console.log(click_img_Value);

    show_img[click_img_Value-1].style.display="block";

    show_img[click_img_Value-1].addEventListener('click', function() {
      show_img[click_img_Value-1].style.display="none";
    });
  });
})

$(function(){
  $('.slider-wrap').slick({
    slide: 'div',        //슬라이드 되어야 할 태그
    infinite : false,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,     //드래그 가능 여부 
    responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          slidesToShow: 4
        } 
      },
      { 
        breakpoint: 768, //화면 사이즈 768px
        settings: {    
          slidesToShow: 5
        } 
      }
    ]

  });
})
