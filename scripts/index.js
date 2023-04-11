//
// SETTING FOCUS AND HIVER STATES TO CHANGE TO WHITE SVG!
//
const productiveA = document.querySelector(".productive-a");
const productiveAImg = document.querySelector(".productive-a-img");
const originalSrc = productiveAImg.src;

//HOVER STATES
productiveA.addEventListener('mouseover',() => {
    productiveAImg.src = "./images/icon-arrow-white.svg";
})
productiveA.addEventListener('mouseout',() => {

    //Need to check if the element is in focus
    //IF it is we dont want to change the img here
    if (document.activeElement !== productiveA){
        productiveAImg.src = "./images/icon-arrow.svg";
    }  
})
//FOCUS STATES
productiveA.addEventListener('focus',() => {
    productiveAImg.src = "./images/icon-arrow-white.svg";
})
productiveA.addEventListener('blur',() => {
    productiveAImg.src = originalSrc;
})

//
//HANDLING EMAIL SIGNUP FORM!
//

//Prevent default behaviour of form from sending request or refreshing page.
document.querySelector('.early-access-form').addEventListener("submit", function(event) {
    event.preventDefault();
});

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener('click', () =>{
    const output = document.querySelector(".output");

    if (output.textContent === "") {
        output.textContent = "Please enter a valid email address";
    }
    else if(output.textContent !== ""){
        console.log("triggered");
        const output = document.querySelector(".output");
        output.textContent = "";
    }
});
