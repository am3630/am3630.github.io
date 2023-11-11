var solid = document.getElementById("solid");
var pit = document.getElementById("pit");
var player = document.getElementById("player");
var leap = 0;
let timetaken = 0;
// setting the varaiables for the game
function jump() {
    // jump being the 
    leap = 1;
    let Countofleap = 0;
    var jumpInterval = setInterval(function () {
        var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        // returning the objects of css is the reason for computer style, whilst get property returns the string of css
        if ((playerTop > 6) && (Countofleap < 15)) {
            player.style.top = (playerTop - 5) + "px";
        }
        // if the condition is true apply this
        if (Countofleap > 20) {
            clearInterval(jumpInterval);
            leap = 0;
            Countofleap = 0;
        }
        // every player starts from zero
        Countofleap++;
    }, 10);
}

setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    //parseInt converts strings into argument
    if (leap == 0) {
        player.style.top = (playerTop + 3) + "px";
    }
    // returning an attribute 
    var solidLeft = parseInt(window.getComputedStyle(solid).getPropertyValue("left"));
    var pitTop = parseInt(window.getComputedStyle(pit).getPropertyValue("top"));
    var pTop = -(400 - playerTop);
    // 400 is the limit becuase that is the height of the canvas, exceeding will lead to problems
    if ((playerTop > 380) || ((solidLeft < 20) && (solidLeft > -50) && ((pTop < pitTop) || (pTop > pitTop + 130)))) {
        // positioning of the varaiables at the start of the page
        alert(" The Game is over. your Score is: " + (timetaken));
        // alert the ending of the game
        player.style.top = 100 + "px";
        timetaken = 0;

    }
}, 10);

pit.addEventListener('animationiteration', () => {

    // used to repeat the code 
    var random = -((Math.random() * 300) + 150);
    // ongoing 
    pit.style.top = random + "px";
    // styling the css
    timetaken++;

});

