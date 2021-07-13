let min = 25;
let seg = 00;
let pause = 5;
let sessions = 3

document.getElementById('minutes').innerHTML = min;	
document.getElementById('pause').innerHTML = pause;	
document.getElementById('sessions').innerHTML = sessions;	

function workPlus(){
    if(min < 60) {
        min++
    }
    document.getElementById('minutes').innerHTML = min;
}

function workLess(){
    if (min >= 1){
        min--
    }
    document.getElementById('minutes').innerHTML = min;
}

function pausePlus(){
    if(min < 60) {
        pause++
    }
    document.getElementById('pause').innerHTML = pause;
}

function pauseLess(){
    if (min >= 1){
        pause--
    }
    document.getElementById('pause').innerHTML = pause;
}

function sessionPlus(){
    if(min < 60) {
        sessions++
    }
    document.getElementById('sessions').innerHTML = sessions;
}

function sessionLess(){
    if (min >= 1){
        sessions--
    }
    document.getElementById('sessions').innerHTML = sessions;
}

