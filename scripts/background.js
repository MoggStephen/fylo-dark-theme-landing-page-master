function handleLoadAndResize(){
    const earlyAccessBackground = document.querySelector(".background");
    const underlay = document.querySelector(".underlay");

    const height = earlyAccessBackground.offsetTop;
    console.log(height.toString())
    
    underlay.style.height = height + "px";
}

window.addEventListener('load', handleLoadAndResize);
window.addEventListener('resize', handleLoadAndResize);