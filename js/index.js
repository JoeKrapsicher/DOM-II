// Your code goes here
//----------------------------1----------------------------------//
navBar = document.querySelector('nav');

navBar.addEventListener("mouseover", function(e) {
    e.target.style.fontSize = "20px";
    e.target.style.color = "Green";
})

//------------------------------2-------------------------------//

navBar.addEventListener("mouseleave", function(e){
    // e.target.style.fontSize = "12px";
    e.target.style.backgroundColor = "orange";
})

//----------------------------3----------------------------------//
sandBus = document.querySelector('.intro img');

sandBus.addEventListener("dblclick", function(e) {
    e.target.style.width = "100px"

    e.target.style.borderColor = "blue"
})

//-----------------------------4---------------------------------//

// logo = document.querySelector(".logo-heading")

// logo.addEventListener('keydown' )

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 70){
        console.log(event);
       this.querySelector('.logo-heading').style.display = "none";
    }
})

//------------------------------5--------------------------------//

welcomeMsg = document.querySelector(".intro h2")

welcomeMsg.addEventListener('click', function(e){
    e.target.style.textDecoration = "underline overline";
    e.target.style.letterSpacing = "20px";
})

//------------------------------6--------------------------------//

adventureImg = document.querySelector(".img-content img")

adventureImg.addEventListener("drag", function(e) {
    e.target.style.height = "100px";
})

//-------------------------------7-------------------------------//

letGo = document.querySelector('.text-content h2')

document.addEventListener('keyup', function(e){
    if(e.keyCode == 76){
        letGo.style.fontSize = "100px";
    }
})

//-------------------------------8-------------------------------//
destination = document.querySelector('.destination h4');

destination.addEventListener("copy", function(e){
    e.target.style.color = "blue"
});




//-------------------------------9-------------------------------//

waterImg = document.querySelector('.img-fluid')

waterImg.addEventListener("mousemove", function(e){
    console.log(e);
    e.target.style.border = "solid";
    e.target.style.height = "200px"
})

//------------------------------10----------------------------------//

boatTwo = document.querySelector(".content-destination img")

boatTwo.addEventListener("mouseenter", function(e){
    e.target.style.cursor = "pointer";
})

//------------------------------------------------------------------//