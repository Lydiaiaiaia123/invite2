function runAway() {
  let button = document.getElementById("no");
  let windowWidth = window.innerWidth - button.offsetWidth;
  let windowHeight = window.innerHeight - button.offsetHeight;
  
  let newPosX = Math.random() * windowWidth;
  let newPosY = Math.random() * windowHeight;
  
  button.style.left = newPosX + "px";
  button.style.top = newPosY + "px";
}