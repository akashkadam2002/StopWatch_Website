let [milliseconds,seconds, minutes, hours]=[0,0,0,0];
let display=document.getElementById("stopwatch");
let timer=null;

function start(){

    milliseconds++;
    if (milliseconds==100) {
        milliseconds=0;
        seconds++;
 
        if(seconds==60){
            seconds=0;
            minutes++;
        }

        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    let mil=milliseconds<10?"0"+milliseconds:milliseconds;

    display.innerHTML=h+":"+m+":"+s+":"+mil;
}


function watchstart(){

    if(timer!==null){
        clearInterval(timer);
    }

   timer= setInterval(start,10);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [milliseconds,seconds, minutes, hours]=[0,0,0,0];
    display.innerHTML="00:00:00:00";

}