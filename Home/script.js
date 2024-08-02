let dayNight = document.querySelector('.daynight')
let banner =document.querySelector(".banner")
dayNight.addEventListener("click",()=> {
    banner.classList.toggle('night')
})
let typedEffect = new Typed("#text",{
    strings:["Full","Stack","Developer"],
    loop: true,
    typeSpeed:100,
    backDelay: 1000
})