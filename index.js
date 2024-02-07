var drumCounts=document.querySelectorAll(".drum").length;

var sounds=["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

// for (let i = 0; i < drumCounts ; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         var playSound=new Audio(path+sounds[i]+".mp3");
//         playSound.play();
//         console.log(sounds[i] +" is played");
//     })
// }

// function playAudio(index){
//     var playSound=new Audio(path+sounds[index]+".mp3");
//     playSound.play();
// }

// for (let i = 0; i < drumCounts; i++) {
    
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
//     })
    
// }
var keyPressed;
document.addEventListener("keydown", function(event){
    keyPressed=event.key;
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
})
