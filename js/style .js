/*----------------- toggle style switcher -----------------*/ 
const StyleSwitcherToggle = document.querySelector('.style-switcher-toggle');
StyleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})
/*----------hide style switcher scroll*/ 
window.addEventListener('scroll',()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open') 
    }
})
/*------------------- theme color ----------------------------*/ 
const alternatestyle =document.querySelectorAll('.alternate-style')
function SetActivesStye(color){
alternatestyle.forEach((style)=>{
    if(color ===style.getAttribute('title')){
        style.removeAttribute('disabled')
    }else{
        style.setAttribute('disabled','true')
    }
})
}
/*------------------------ theme light and dark mode ----------------------------*/ 
const DayNight =document.querySelector('.day-night')
DayNight.addEventListener('click',()=>{
    DayNight.querySelector('i').classList.toggle('fa-sun')
    DayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        DayNight.querySelector('i').classList.add('fa-sun')
    }else{
        DayNight.querySelector('i').classList.add('fa-moon') 
    }
})


function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove('active')
    }
    const target =element.getAttribute('href').split('#')[1];
    document.querySelector('#'+ target).classList.add('active')
 }

 

/*--------------------------------- typing animation ----------------------------------*/ 
// var typed = new typed('.my-name',{
//     strings:['front end','web Developer','Marketing','Copy Writer','Translated'],
// typeSpeed:100,
// backSpeed:60,
// loop:true
// })
/*--------------------------------- aside ----------------------------------*/


const nav =document.querySelector(".nav")
 const navList =document.querySelectorAll("li")
 const navListTotal = navList.length;
for(let i=0; i<navListTotal; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click", function(){
        for(let j=0; j<navListTotal; j++){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
    })
}

function asideSectionTogglerBtn(){
    
}
for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove('back-section')
}
/*----------------- toggle style switcher -----------------*/ 
const StyleSwitcherToggle = document.querySelector('.style-switcher-toggle');
StyleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})
/*----------hide style switcher scroll*/ 
window.addEventListener('scroll',()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open') 
    }
})

/*------------------- theme color ----------------------------*/ 
const AlternateStyle =document.querySelectorAll('.alternate-style');
function SetActivesStye(color){
    AlternateStyle.forEach((style)=>{
if(color ===style.getAttribute('title')){
    style.removeAttribute('disabled')
}else{
    style.setAttribute('disabled','true')
}
    });
};
/*------------------------ theme light and dark mode ----------------------------*/ 
const DayNight =document.querySelector('.day-night')
DayNight.addEventListener('click',()=>{
    DayNight.querySelector('i').classList.toggle('fa-sun')
    DayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        DayNight.querySelector('i').classList.add('fa-sun')
    }else{
        DayNight.querySelector('i').classList.add('fa-moon') 
    }
})


/*-------------------------------------- aside ---------------------------------*/ 
const nav =document.querySelector('.nav'),
navList =document.querySelectorAll('li'), 
navListTotal = navList.length,
allSection =document.querySelectorAll('.section'),
totalSection = allSection.length
for(let i=0; i<navListTotal; i++){
    const a = navList[i].querySelector('a')
    a.addEventListener('click', function(){
      removeBackSection();
        for(let j=0; j<navListTotal; j++){
            if(navList[j].querySelector('a').classList.contains('active')){
                addBackSection(j)
                // allSection[j].classList.add('back-section')
            }
            navList[j].querySelector('a').classList.remove('active')
        }this.classList.add('active')
        showSection(this)
        if(window.innerWidth < 1100){
            asideSectionTogglerBtn() 
        }
    })

}
function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove('back-section')
    }
}
function addBackSection(num){
    allSection[num].classList.add('back-section')
}
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove('active')
    }
    const target =element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active')
}
function updateNav(element){
    for(let i=0; i<navListTotal; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target =element.getAttribute('href').split('#')[1];
        if(target ===navList[i].querySelector('a').getAttribute('href').split('#')[1]){
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector('.hire-me').addEventListener('click',function (){
    const sectionIndex = this.getAttribute('data-section-index')
    
    showSection(this);
    updateNav(this);
    removeBackSection()
    addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector('.nav-toggle');
 const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () =>{
    asideSectionTogglerBtn()
})
function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open')
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle('open')
    }
}