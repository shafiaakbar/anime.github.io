var audio = document.getElementsByClassName('playAudio')[0];
var oldSrc = null;

function playAudio(src) {
    if (audio.src != "http://127.0.0.1:5501/"+src) {
        audio.src = src;
        audio.play();
        oldSrc = audio.src;
    }

    if (oldSrc === audio.src) {
        if (audio.duration > 0 && !audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
    }
}

document.querySelectorAll(".drum").forEach((e) => {
    e.addEventListener("click", handleClick);
})

function handleClick() {
    var buttonInnerHTML = this.className.replace(" drum", "");
    switch (buttonInnerHTML) {
        case 'w':
            playAudio("sounds/kira.mp3")
            break;

        case 'a':
            playAudio("sounds/kakashi.mp3")
            break;

        case 's':
            playAudio("sounds/madara.mp3")
            break;

        case 'd':
            playAudio("sounds/itachiu.mp3")
            break;

        case 'j':
            playAudio("sounds/pain.mp3")
            break;

        case 'k':
            playAudio("sounds/sasuke.mp3")
            break;

        case 'l':
            playAudio("sounds/obito.mp3")
            break;

        default: console.log(buttonInnerHTML)
            break;
    }
}


document.addEventListener("keydown", function(event) {

    switch (event.key) {
        case 'w':
            playAudio("sounds/kira.mp3")
            break;

        case 'k':
            playAudio("sounds/kakashi.mp3")
            break;

        case 'm':
            playAudio("sounds/madara.mp3")
            break;

        case 'i':
            playAudio("sounds/itachiu.mp3")
            break;

        case 'p':
            playAudio("sounds/pain.mp3")
            break;

        case 's':
            playAudio("sounds/sasuke.mp3")
            break;

        case 'o':
            playAudio("sounds/obito.mp3")
            break;

        default: console.log(event.key)
            break;
    }})
    


// minimized version
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//     alert("hehe")})
// var audio= new Audio('tom-1.mp3');
// audio.play();
// }




