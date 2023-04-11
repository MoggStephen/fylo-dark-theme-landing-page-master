const body = document.querySelector("body");

const beforeUnderlay = document.querySelector(".above-underlay");
const imgUnderlay = document.querySelector(".img-underlay");
const afterUnderlay = document.querySelector(".below-underlay");

const beforeUnderlayHeight = document.querySelector(".before-underlay-height");
const afterUnderlayHeight = document.querySelector(".below-underlay-height");
//CHANGE underlay height
function handleLoadAndResize(){  

    //Delayed the load of the webpage with display:none on body due to the issue of the img-underlay flickering at the start of the page loading.
    body.style.display = "block";
    
    //IMG UNDERLAY
    imgUnderlay.style.top = (beforeUnderlayHeight.offsetTop) + "px";
    
    //ABOVE UNDERLAY
    beforeUnderlay.style.height = (imgUnderlay.offsetTop + imgUnderlay.offsetHeight) + "px";
    
    //BELOW UNDERLAY   
    afterUnderlay.style.top = (imgUnderlay.offsetTop + imgUnderlay.offsetHeight) + "px";
    afterUnderlay.style.height = ((afterUnderlayHeight.offsetTop - (imgUnderlay.offsetTop + imgUnderlay.offsetHeight)) - 10 ) + "px";
    
    
}

window.addEventListener('load', handleLoadAndResize);
window.addEventListener('resize', handleLoadAndResize);