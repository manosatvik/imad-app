console.log('Loaded!');

var element = document.getElementById("main-text").innerHTML="Hello text is changed";

//move image

var image = document.getElementById("image");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft + "px";
}
image.onclick = function(){
    var interval = setInterval(moveRight,100);
}