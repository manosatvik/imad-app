var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    
    var request = XMLHttpRequest();
    
    //capture the response and store it in counter variable
    
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter = request.responseText;
                var span = document.getElementById("count");
    span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://manosatvik.imad.hasura-app.io/counter',true);
    request.send(null);
};