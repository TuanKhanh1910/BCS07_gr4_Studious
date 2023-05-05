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
