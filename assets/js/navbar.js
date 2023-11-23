// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

let prevScrollPos = window.scrollY;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.getElementById("navbar").style.top = "0px";
  } 
  else {
    // user has scrolled down
    document.getElementById("navbar").style.top = "-100px";
  }

  if(currentScrollPos < 50){
    document.getElementById("navbar").style.top = "0px";
  }
  
  // update previous scroll position
  prevScrollPos = currentScrollPos;

  var x = document.getElementById("navbar");
  x.className = "navbar";
}