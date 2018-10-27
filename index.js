window.onscroll = function() {myFunction()};

let header = document.getElementById("banner");
let name = document.getElementById("name");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
  if(window.pageYOffset > 300) {
    name.opacity = 0;
  } else if(window.pageYOffset > 100){
    let op = (300 - pageYOffset) * (1 / (300 - 100));
    name.style.opacity = op;
  } else {
    name.style.opacity = 1;
  }
}
