/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
     navToggle=document.getElementById('nav-toggle')
     navClose=document.getElementById('nav-close')

//==============MENU SHOW==========================*/
/* Validade if const exist */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===================MENU HIDDEN ====================*/
 if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
 }
/*=============== REMOVE MENU MOBILE ===============*/
 const navLink =document.querySelectorAll('.nav__link')
   const linkAction = ()=>{
    const navMenu= document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu

    navMenu.classList.remove('show-menu')
   }
   navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SHADOW HEADER ===============*/
 
const shadowHeader= ()=>{
    const header=document.getElementById('header')
    // when the scroll is greater than 50 viewport heigth, add the 
    this.scrollY>=50? header.classList.add('shadow-header')
                     :header.classList.remove('shadow-header')
}
    
window.addEventListener('scroll',shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = ()=>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY>=350?scrollup.classList.add('show-scroll')
                  :scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')
const scrollActive = ()=>{
    const scrollDonw = window.scrollY
    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*='+ sectionId + ']')
        
        if(scrollDonw> sectionTop && scrollDonw<=sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themButton = document.getElementById('theme-button')
const darkTheme= 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line'
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    themButton.classList[selectedIcon ==='ri-moon-line'? 'add': 'remove'](iconTheme)
}
themButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true,
})

sr.reveal(`.home__data , .join__container, .footer`)
sr.reveal(`.home__img` , {origin:'bottom'})
sr.reveal(`.enjoy__card, .popular__card` , {interval:100})
sr.reveal(`.about__data` , {origin:'right'})
sr.reveal(`.about__img` , {origin:'left'})