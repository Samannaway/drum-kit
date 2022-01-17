
// making general variables
var drumButtons = document.querySelectorAll(".drum")
var noOfDrumButtons = drumButtons.length
var press;

// making a key-press animation - 
function keyPressAnimation(whichKey) {
    var key = document.querySelector(("."+whichKey))
    key.classList.add("pressed")

    setTimeout(function() {
        key.classList.remove("pressed")
    },200)
}


// making the switch statement
function keyCheck(key) {
    switch (key) {
        case "a":
            var sound = new Audio("sounds/tom-4.mp3")
            sound.play()
        break;
        
        case "s":
            var sound = new Audio("sounds/tom-3.mp3")
            sound.play()
        break;

        case "d":
            var sound = new Audio("sounds/tom-2.mp3")
            sound.play()
        break;

        case "j":
            var sound = new Audio("sounds/tom-1.mp3")
            sound.play()
        break;

        case "k":
            var sound = new Audio("sounds/snare.mp3")
            sound.play()
        break;

        case "l":
            var sound = new Audio("sounds/kick-bass.mp3")
            sound.play()
        break;

        case "i":
            var sound = new Audio("sounds/crash.mp3")
            sound.play()
        break;
        default:
            console.log("wrong key")
        break;
    }
}


// playing sound from cursor press
for (var i = 0; i < noOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click",function(){
        
        keyCheck(this.innerHTML)
        keyPressAnimation(this.innerHTML)
    });

}



// playing sound from keys
document.addEventListener("keydown",function(event){
    keyCheck(event.key)
    keyPressAnimation(event.key)
});

//let sound = new Audio("sounds/crash.mp3")
//sound.play()
