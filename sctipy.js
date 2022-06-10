// assignment elements

const secondElemet = document.querySelector(".second");
const minuteElemet = document.querySelector(".minute");
const hourElemet = document.querySelector(".hour");

// buttons

const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const surqleButton = document.querySelector(".surqle");

// listeners


startButton.addEventListener('click', ()=> {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    startButton.classList.toggle('pause');
    startButton.innerHTML = "<span></span><span></span><span></span><span></span>пауза"
    if(!startButton.classList.contains('pause')){
        clearInterval(interval);
        startButton.innerHTML = "<span></span><span></span><span></span><span></span>старт"
    }
});
resetButton.addEventListener('click', ()=> {
    clearInterval(interval);
    milisecond = 00;
    second = 00;
    minute = 00;
    hour = 00;
    hourElemet.innerHTML = "00"+ "<span>.</span>";
    minuteElemet.innerHTML = "00" + "<span>.</span>";
    secondElemet.innerHTML = "00";
    startButton.innerHTML = "<span></span><span></span><span></span><span></span>старт"
    startButton.classList.remove('pause');
    const blocks = document.querySelectorAll('.tom');
    for(let i = 0; i<blocks.length; i++){
        blocks[i].remove();
    }
})

surqleButton.addEventListener('click', makeResult);


// variables
let milisecond = 00,
    second = 00,
    minute = 00,
    hour = 00,
    interval;


function startTimer(){
    milisecond++;
    if(milisecond>99){
        second++;
        secondElemet.innerHTML = "0" + second;
        milisecond = 00;
    }
    // seconds
    if(second>9){
        secondElemet.innerHTML = second;
    }
    if(second > 59){
        minute++;
        minuteElemet.innerHTML ="0"+ minute + "<span>.</span>";
        second = 0;
        secondElemet.innerHTML = "0" + second;
    }
    // minutes
    if(minute > 9) {
        minuteElemet.innerHTML = minute;
    }
    if(minute > 59){
        hour++;
        hourElemet.innerHTML = "0" + hour +"<span>.</span>";
        minute= 0;
        minuteElemet.innerHTML = "0" + minute;
    }
}

function makeResult(){
    const result = document.querySelector('.results');
    const block = document.createElement('div');
    block.classList.add('tom');
    block.innerText = `${hour}:${minute}:${second}`;
    result.append(block);
    const blocks = document.querySelectorAll('.tom');
    console.log(blocks);
    for(let i = 0; i<blocks.length; i++){
        if(i > 6){
              blocks[i - 7].remove();
        }
    }
}
