let start = document.getElementById('start-btn');
let pause = document.getElementById('pause-btn');
let reset = document.getElementById('reset-btn');

let wm = document.getElementById('work-minutes');
let ws = document.getElementById('work-seconds');

let bm = document.getElementById('break-minutes');
let bs = document.getElementById('break-seconds');

let startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running")
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    pauseInterval();
    startTimer = undefined;
})

pause.addEventListener('click', function(){
    pauseInterval();
    startTimer = undefined;
})





function timer(){
    // Work timer countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // Break timer countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        }else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // Increment counter by 1 if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 & bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}


function pauseInterval(){
    clearInterval(startTimer);

}