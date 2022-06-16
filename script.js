var countDownDate = new Date("Sept 16, 2022 00:00:00").getTime();
var x = setInterval(function(){


    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    

},1000);



const text = document.getElementById("text");
const prog = "WebSite Under Construction!";
let hafsi = 1;

setInterval(writeText, 200);

function writeText() {
    text.innerText = prog.slice(0, hafsi)
	
	hafsi++;
	
	if(hafsi > prog.length){
      hafsi = 7;
    }

}



    