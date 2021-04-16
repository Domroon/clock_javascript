let time = new Date();
let formattedTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
let timeContent = document.querySelector(".time-content")
timeContent.innerText = formattedTime;
