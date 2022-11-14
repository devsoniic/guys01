let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountais4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let guys01 = document.querySelector('.guys01');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountais4.style.top = value + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    guys01.style.fontSize = value + 'px';
    if(scrollY >= 67){
        guys01.style.fontSize = 67 + 'px';
        guys01.style.position = 'fixed';
        if(scrollY >= 478){
            guys01.style.display = 'none';
        }else{
            guys01.style.display = 'block';
        }
        if(scrollY >= 127)
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
}
