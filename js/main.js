//back to top
window.onscroll = function(){
    if(document.documentElement.scrollTop > 30){
        document.getElementById('backTotop').style.display = 'block';
        document.getElementById('main__menu').classList.add('fix__top');
    } else {
        document.getElementById('backTotop').style.display = 'none';
        document.getElementById('main__menu').classList.remove('fix__top');

    }
    document.getElementById('backTotop').onclick = function(){
        document.documentElement.scrollTop = 0;
    }
}
var body = document.getElementById("myBody");
var dark = document.querySelector("header nav .moon a:first-child");
var light = document.querySelector("header nav .moon a:last-child");
light.style.display = "none";
dark.onclick = function(){
    dark.style.display = "none";
    light.style.display = "block";
    body.classList.add("dark");
}
light.onclick = function(){
    dark.style.display = "block";
    light.style.display = "none";
    body.classList.remove("dark");
}
