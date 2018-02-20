var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    
    var request = XMLHttpRequest();
    
    //capture the response and store it in counter variable
    
    request.readystatechange = function(){
        if(request.readystate===XMLHttpRequest.done)
        {
            if(request.status===200)
            {
                var counter = request.responseText;
                var span = document.getElementById("count");
    span.innerHTML=counter.toString();
            }
        }
    };

};