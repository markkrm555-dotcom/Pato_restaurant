const btnUp = document.querySelector(".back_btn")
window.onscroll = function(){
    if(window.scrollY >= (100)){
        btnUp.style.display = "block";
    }else{
        btnUp.style.display = "none";
    }
}
btnUp.onclick = function(){
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth"
    })
}

const seconds = document.querySelector(".seconds");
function time1(){
    seconds.innerHTML -= 1;
    if(seconds.innerHTML=="0"){
        seconds.innerHTML ="60";
        time1();
    }
}
let counter1 = setInterval(time1 , 1000);


const minutes = document.querySelector(".minutes");
function time2(){
    minutes.innerHTML -= 1;
    if(minutes.innerHTML=="0"){
        minutes.innerHTML ="60";
        time2();
    }
}
let counter2 = setInterval(time2 , 59000);

