var imgArray = ["img/f1.png", "img/f2.png", "img/f3.png"];
var selector = document.getElementById("img");
var count = 0;

function next(){
    count++;
    if (count>=imgArray.length){
        count = 0;
        selector.src = imgArray[count];
    }
    else{
        selector.src = imgArray[count];
    }
}

function previous(){
    count--;
    if(count<0){
        count = imgArray.length - 1;
        selector.src = imgArray[count];
    }
    else{
        selector.src = imgArray[count];
    }
}