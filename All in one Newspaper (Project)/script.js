let explore = document.getElementById("explore");
if(explore){
    explore.onclick = function(){
        window.location.href = "main.html";
    }
}

let webname = document.getElementById("name");
if(webname){
    webname.onclick = function(){
        window.location.href = "main.html";
    }
}

let l = document.getElementById("light");
if(l){
    l.onclick = function(){
        document.body.style.backgroundColor = "white";
    }
}

let d = document.getElementById("dark");
if(d){
    d.onclick = function(){
        document.body.style.backgroundColor = "black";
    }
}

let saved = document.getElementById("save");
if(saved){
    saved.onclick = function(){
        window.location.href = "saved.html";
    }
}

let alertn = document.getElementById("alert-news");
if(alertn){
    alertn.onclick = function(){
        window.location.href = "alertnews.html";
    }
}

let link1 = document.getElementById("github");
if(link1){
    link1.onclick = function(){
        window.location.href = "https://github.com/vp0813";
    }
}

let link2 = document.getElementById("linkedIn");
if(link2){
    link2.onclick = function(){
        window.location.href = "https://www.linkedin.com/in/vaishnavi-patra/";
    }
}