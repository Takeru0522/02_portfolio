const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.burger')
// const navItems = document.querySelectorAll('.menu-nav__item')
const header = document.querySelector('header')
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('open')
        burger.classList.add('open')
        showMenu = !showMenu
    } else {
        nav.classList.remove('open')
        burger.classList.remove('open')
        showMenu = !showMenu
    }
}


  const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});

// Page top 
window.addEventListener('scroll', showBtn)
const toTopBtn = document.querySelector('.to-top')

function showBtn() {
  let pageY = window.pageYOffset
  console.log(pageY)
  if(pageY > 160){
    toTopBtn.classList.add('open')
    header.classList.add('open')
  } else {
    header.classList.remove('open')
    toTopBtn.classList.remove('open')

  }
  // if(pageY > 800) {
  //   header.classList.add('open')
  // } else if(pageY > 400){
  //   toTopBtn.classList.add('open')
  //   header.classList.remove('open')
  // } else {
  //   toTopBtn.classList.remove('open')

  // }
}

toTopBtn.addEventListener('click', () => window.scrollTo(0, 0))

// 記事が長い場合に短くする
// articleページのみで行うので、URLを確認
if(location.href.includes('article')) {
  let titleContent = document.querySelector('.breadcrumb__article-title').textContent
  if(titleContent.length > 10 && window.innerWidth < 380) {
    console.log(window.innerWidth)
    const shortTitle = titleContent.slice(0, 12)
    console.log(shortTitle)
    document.querySelector('.breadcrumb__article-title').textContent = shortTitle + '...';
  }
}
