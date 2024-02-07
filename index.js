var drumCounts=document.querySelectorAll(".drum").length;
var sounds=["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

// tap event listener
for (let i = 0; i < drumCounts; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.textContent);
        animationButton(this.textContent);
        VibrateTime(100);
    });    
}

// keypress eventlistner
document.addEventListener("keydown", function(event){
   playSound(event.key);
   animationButton(event.key);
})


// function for playing sound
function playSound(keyPressed){
    var audioToPlay;
    switch (keyPressed) {
        case "w":
            audioToPlay=new Audio("crash.mp3");
            audioToPlay.play();
            break;
        case "a":
            audioToPlay=new Audio("kick-bass.mp3");
            audioToPlay.play();
            break;
        case "s":
            audioToPlay=new Audio("snare.mp3");
            audioToPlay.play();
            break;
        case "d":
            audioToPlay=new Audio("tom-1.mp3");
            audioToPlay.play();
            break;
        case "j":
            audioToPlay=new Audio("tom-2.mp3");
            audioToPlay.play();
            break;
        case "k":
            audioToPlay=new Audio("tom-3.mp3");
            audioToPlay.play();
            break;
        case "l":
            audioToPlay=new Audio("tom-4.mp3");
            audioToPlay.play();
            break;
        default:
            break;
    }
}

// function for pressing animation
function animationButton(keyPressed){
    var activeBtn=document.querySelector("."+keyPressed);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}

// Vibrating event listener
function VibrateTime(ms){
    navigator.vibrate(ms);
}
