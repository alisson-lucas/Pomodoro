let min = 25;
let seg = 00;
let pause = 5;
let sessions = 3
let time = localStorage.getItem('time');

localStorage.getItem('time', min);
	
document.getElementById('pause') ? document.getElementById('pause').innerHTML = pause : '';	
document.getElementById('sessions') ? document.getElementById('sessions').innerHTML = sessions : '';
document.getElementById('minutes') ? document.getElementById('minutes').innerHTML = min : '';

function loaded() {
    localStorage.setItem('time', min);
}

function workPlus(){
    min < 60 ? min++ : '';

    localStorage.setItem('time', min);
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('time').innerHTML = min;

    console.log(document.getElementById('time'))
}

function workLess(){
    min >= 1 ? min-- : '';

    localStorage.setItem('time', min);
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



document.getElementById('time') ? document.getElementById('time').innerHTML = seg === 0 ?  '<span>' + time + ':' + seg + '0 <span>' : '<span>' + time + ':' + seg + '<span>' : '';
document.getElementById('pause') ? document.getElementById('pause').innerHTML = seg === 0 ?  '<span>' + pause + ':' + seg + '0 <span>' : '<span>' + pause + ':' + seg + '<span>' : '';


function relogio(){			
    if((time > 0) || (seg > 0)){				
        if(seg == 0){					
            seg = 10;					
            time = time - 1	
        }				
        else{					
            seg = seg - 1;				
        }				
        if(time.toString().length == 1){					
            time = "0" + time;				
        }				
        if(seg.toString().length == 1){					
            seg = "0" + seg;				
        }				
        document.getElementById('time').innerHTML =  time + ":" + seg;				
        setTimeout('relogio()', 1000);	
        console.log(time, seg);	
    }			
    // else{				
    //     document.getElementById('spanRelogio').innerHTML = "00:00";			
    // }		
    if (time == 00 && seg == 00) {
        element = document.querySelector('#timer'); 
        element.classList.add('hidden');

        elementPause = document.querySelector('#pause');
        element.classList.remove('hidden')
    }
}	
