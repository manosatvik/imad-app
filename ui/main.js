var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    
    //make a new request
    var request = new XMLHttpRequest();
    //if request state changes
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request .open('GET','http://manosatvik.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

var nametext = document.getElementById("name");
var uname = nametext.value;
var btn = document.getElementById('submit-btn');
btn.onclick = function(){
    var names = ['name1','name2','name3'];
    var list='';
    for(i=0 ;i<names.length;i++){
        list += '<li>'+names[i]+'</li>';
    }
    var namelist = document.getElementById('ul');
    nameslist.innerHTML = list;
};