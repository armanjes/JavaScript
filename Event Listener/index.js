var btn = document.getElementById("btn");
btn.addEventListener("mouseout", clickFunction);

function clickFunction(){
    alert("hello");
}


var h1 = document.getElementById("h1");
h1.addEventListener("mouseover", 
    function(){
        h1.classList.add("my-style");
    }
)

var h1 = document.getElementById("h1");
h1.addEventListener("mouseout", 
    function(){
        h1.classList.remove("my-style");
    }
)