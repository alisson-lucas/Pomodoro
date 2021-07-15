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



document.getElementById('time') ? document.getElementById('time').innerHTML = '<span>' + time + ':' + seg + '<span>' : '';


function relogio(){			
    if((min > 0) || (seg > 0)){				
        if(seg == 0){					
            seg = 59;					
            min = min - 1	
        }				
        else{					
            seg = seg - 1;				
        }				
        if(min.toString().length == 1){					
            min = "0" + min;				
        }				
        if(seg.toString().length == 1){					
            seg = "0" + seg;				
        }				
        document.getElementById('time').innerHTML = min + ":" + seg;				
        setTimeout('relogio()', 1000);			
    }			
    // else{				
    //     document.getElementById('spanRelogio').innerHTML = "00:00";			
    // }		
}	