

var clickButton = document.querySelectorAll(".button");
var heading = document.querySelector("h1");

for(var i = 0; i <= clickButton.length; i++){
    clickButton[i].addEventListener(
        "click",
        function(){
            var text = this.innerHTML;
            heading.innerHTML = text + " clicked.";
        }
    
    )
}