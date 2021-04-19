var showCurrentTime = function (){

    let time = new Date();
    let timeContent = document.querySelector(".time-content")

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    timeContent.innerText = hours + ":" + minutes + ":" + seconds;
}

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);
