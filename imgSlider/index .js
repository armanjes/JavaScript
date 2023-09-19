


var imgArray = ["img/f1.png", "img/f2.png", "img/f3.png"];
var btn = document.querySelector("#img");
var count = 0;

function next(){
    count++;
    if(imgArray.length<=count){
        count = 0;
        btn.src = imgArray[count];
    }
    else{
        btn.src = imgArray[count];
    }
}

function previous(){
    count--;
    if(count<0){
        count = imgArray.length - 1;
        btn.src = imgArray[count];
    }
    else{
        btn.src = imgArray[count];
    }
}