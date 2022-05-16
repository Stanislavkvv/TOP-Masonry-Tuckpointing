"use strict"
const viewer = document.querySelector("section.galleryPage .viewer")
const imgHowBtns = document.querySelectorAll("section.galleryPage .container .gallery .img")
const closeBtn = document.querySelector("section.galleryPage .viewer .viewer__block button.close")
const prevBtnViewer = document.querySelector("section.galleryPage .viewer .viewer__block button.prevBtn")
const nextBtnViewer = document.querySelector("section.galleryPage .viewer .viewer__block button.nextBtn")

let viewerSlide;
for (let i = 0; i < imgHowBtns.length; i++) {
    imgHowBtns[i].style.backgroundImage = `url(./${imgHowBtns[i].querySelector("img").getAttribute("src")})`
    imgHowBtns[i].setAttribute("photo",i+1)
}
imgHowBtns.forEach(item=>{
    item.addEventListener("click",function(){
        document.body.classList.add("viewer")
        viewer.classList.add("active")
        viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
        viewer.querySelector(".counter span").textContent = item.getAttribute("photo")
        viewerSlide = item.getAttribute("photo");
    })
})
closeBtn.addEventListener("click",function(){
    document.body.classList.remove("viewer")
    viewer.classList.remove("active")
})
prevBtnViewer.addEventListener("click",function(){viewerSlider("-")})
nextBtnViewer.addEventListener("click",function(){viewerSlider("+")})

viewer.querySelector(".counter span.slides").textContent = imgHowBtns.length

function viewerSlider(action){
    if(action=="+"){
        if(viewerSlide==imgHowBtns.length){
            viewerSlide = 1
        } else {
            viewerSlide++
        }
    } else if(action=="-") {
        if(viewerSlide==1){
            viewerSlide = imgHowBtns.length
        } else {
            viewerSlide--
        }
    }
    viewer.querySelector("img").setAttribute("src","")
    imgHowBtns.forEach(item=>{
        if(item.getAttribute("photo")==viewerSlide){
            viewer.querySelector(".counter span.slide").textContent = item.getAttribute("photo")
            viewer.querySelector("img").setAttribute("src",item.querySelector("img").getAttribute("src"))
        }
    })
}