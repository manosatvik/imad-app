console.log('Loaded!');

var element = document.getElementById("main-text").innerHTML="Hello text is changed";

//move image

var image = document.getElementById("image");

image.onclick = function(){
    image.style.marginLeft="100px";
}