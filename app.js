//Selectors
const wakeupButton = document.querySelector('.wakeup_button');
const lunchButton = document.querySelector('.lunch_button');
const napButton = document.querySelector('.nap_button');

//Event Listener
wakeupButton.addEventListener('click', setWakeup);


//Functions
var showCurrentTime = function (){

    var time = new Date();
    var timeContent = document.querySelector(".time-content")

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

function setWakeup (){
    var wakeupTime = document.querySelector('.wakeup_time').value;
}

function getWakeup (){
    var wakeupTime = document.querySelector('.wakeup_time').value;
    return wakeupTime;
}

function getLunch (){
    var lunchTime = document.querySelector('.lunch_time').value;
    return lunchTime;
}

function getNap (){
    var napTime = document.querySelector('.nap_time').value;
    return napTime;
}

var setPicture = function(){
    var time = new Date();
    var formattedTime = time.getHours() + ":" + time.getMinutes();
    if(getWakeup() == formattedTime){
        console.log("YES!!");
    }
}

//Execution
var oneSecond = 1000;
var oneMinute = 60000;
setInterval(showCurrentTime, oneSecond);
setInterval(setPicture, oneSecond);



