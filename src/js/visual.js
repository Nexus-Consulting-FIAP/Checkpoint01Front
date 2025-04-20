//==========HEADER SECTION==========//

//Hide|Show Nav ======
var isUp = true;
var isOver;
function onMouseOverNav(isOver_) {
    console.log("oi")
    isOver = isOver_;
    if (isOver) document.getElementById("nav").style.opacity = "1";
    else if (!isOver && !isUp) document.getElementById("nav").style.opacity = "0";
}
window.onscroll = function() {
    currentScrollPos = window.pageYOffset;
    if (50 > currentScrollPos) {
      document.getElementById("nav").style.opacity = "1";
      isUp = true;
    } else if (50 <= currentScrollPos && !isOver) {
      document.getElementById("nav").style.opacity = "0";
      isUp = false;
    }
}
