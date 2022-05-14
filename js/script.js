"use strict"
// slider
const prevBtn = document.querySelector("section.slider .slideshow button.prev");
const nextBtn = document.querySelector("section.slider .slideshow button.next");
const slideshowBLock = document.querySelector("section.slider .slideshow")

prevBtn.addEventListener("click",function(){ slider("-") })
nextBtn.addEventListener("click",function(){ slider("+") })

let slide = 0;
slider("+")
setInterval(()=>{slider("+")},10000)
function slider(action){
    if(action=="+"){
        if(slide==3){
            slide = 1
        } else {
            slide++
        }
    } else if(action=="-") {
        if(slide==1){
            slide = 3
        } else {
            slide--
        }
    }
    let i=60;
    let int = setInterval(()=>{
            slideshowBLock.style.opacity = i/100;
            i++;
            if(i==101){clearInterval(int)}
        },10)
    slideshowBLock.setAttribute("slide",slide)
    setTimeout(()=>{
        slideshowBLock.querySelectorAll(".container .sliderBlock ul.slidesText li").forEach(item=>{item.classList.remove("active")})
        slideshowBLock.querySelector(`.container .sliderBlock ul.slidesText li[slide='${slide}']`).classList.add("active")
    },50)
}
