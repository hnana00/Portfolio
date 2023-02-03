// nav
// 클릭한 메뉴의 section으로 이동
const header = document.querySelector('header');
const menu = document.querySelectorAll('header ul li');
const section = document.querySelectorAll('section');
for(i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function(event) {
    if(event.target === menu[0]) {
      window.scroll({top:section[0].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[1]) {
      window.scroll({top:section[1].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[2]) {
      window.scroll({top:section[2].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[3]) {
      window.scroll({top:section[3].offsetTop, behavior:'smooth'});
    } else {
      window.scroll({top:section[4].offsetTop, behavior:'smooth'});
    }
  });
};
// 2번째 section에서 글자색 변경
window.addEventListener('scroll', function(){
  if(window.scrollY >= section[1].offsetTop-50 && window.scrollY < section[2].offsetTop-50) {
    header.style.color = '#F5F0ED';
  } else {
    header.style.color = '#2F4858';
  }
});

// Contact
const ContactBg = document.querySelector('#Contact #bg');
window.addEventListener('scroll', function() {
  if(window.scrollY >= section[2].offsetTop+200) {
    opacityTransitionDelay(ContactBg, '1', '.5s', '1s');
    ContactBg.style.bottom = '0';
  }
});