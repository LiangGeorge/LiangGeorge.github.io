var i = 0;
var intro = "Going Even Further Beyond @ SBU!";
//The higher the number the slower
var speed = 60;

function typeIntro(){
    if (i < intro.length){
        document.getElementById("introduction").innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeIntro,speed)
    }
}