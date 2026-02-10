// Click events on buttons
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", handleClick);
});

// Keyboard events on the whole document
document.addEventListener("keydown", handlePress);

function handleClick() {
  const key = this.innerHTML.toLowerCase();
  playSound(key);
  buttonAnimation(key);
}

function handlePress(event) {
  const key = event.key.toLowerCase();
  playSound(key);
  buttonAnimation(key);
}

function playSound(key) {
  switch (key) {
    case "w":
      new Audio('./sounds/crash.mp3').play();
      break;
    case "a":
      new Audio('./sounds/kick-bass.mp3').play();
      break;
    case "s":
      new Audio('./sounds/snare.mp3').play();
      break;
    case "d":
      new Audio('./sounds/tom-1.mp3').play();
      break;
    case "j":
      new Audio('./sounds/tom-2.mp3').play();
      break;
    case "k":
      new Audio('./sounds/tom-3.mp3').play();
      break;
    case "l":
      new Audio('./sounds/tom-4.mp3').play();
      break;
    default:
      console.log(key);
  }
}   

function buttonAnimation(curKey){
    var activekey= document.querySelector("."+ curKey);
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    }, 300);
}