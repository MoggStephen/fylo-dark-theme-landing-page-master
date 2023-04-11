//CHANGE underlay height
function handleLoadAndResize(){
    const earlyAccessBackground = document.querySelector(".background");
    const underlay = document.querySelector(".underlay");

    const height = earlyAccessBackground.offsetTop;
    
    underlay.style.height = (height-10) + "px";
}

window.addEventListener('load', handleLoadAndResize);
window.addEventListener('resize', handleLoadAndResize);