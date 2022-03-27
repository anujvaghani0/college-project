var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;
function start(){
    timer=true
    stopwatch()
}
function stop(){
    timer=false
}
function reset(){
    timer=false
     hr=0;
     min=0;
     sec=0;
     count=0;
     document.getElementById('count').innerHTML="00"
     document.getElementById('sec').innerHTML="00"
     document.getElementById('Min').innerHTML="00"
     document.getElementById('hr').innerHTML="00"
}
function stopwatch(){
    if(timer===true){
        count=count+1;
        if(count===100){
            sec=sec+1;
            count=0;
        }
        if(sec===60){
            min=min+1;
            sec=0;
        }
        if(min===60){
            hr=hr+1;
            sec=0;
            min=0;
        }
        var hrs=hr;
        var mins=min;
        var secs=sec;
        var counts=count;
        if(hr<10){
            hrs="0"+hrs
        }
        if(mins<10){
            mins="0"+mins
        } 
        if(secs<10){
            secs="0"+secs
        }
         if(counts<10){
            counts="0"+counts
        }

        document.getElementById('count').innerHTML=counts
        document.getElementById('sec').innerHTML=secs
        document.getElementById('Min').innerHTML=mins
        document.getElementById('hr').innerHTML=hrs
        
        setTimeout("stopwatch()",10)

    }
}