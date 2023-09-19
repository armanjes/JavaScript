var btn = document.querySelector("button");

btn.addEventListener("click",myBtn)

function myBtn(){
    alert("hlw");
}

//---------------------------------------------

var myHeading = document.querySelector("h1");


myHeading.addEventListener(
    "mouseover",
    function(){
        myHeading.classList.add("style");
    }
)

myHeading.addEventListener(
    "mouseout",
    function(){
        myHeading.classList.remove("style");
    }
)
