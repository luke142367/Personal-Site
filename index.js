window.onscroll = function() {handleScroll()};

let header = document.getElementById("banner");
let headerHeight = header.clientHeight;
let name = document.getElementById("name");
let sticky = header.offsetTop;
let content = document.getElementById("content")

function handleScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    content.setAttribute("style", "padding-top:" + header.clientHeight + "px")
  } else {
    header.classList.remove('sticky');
    content.setAttribute("style", "padding-top: 0px")
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

function setHeaderScrolling(name) {
  let info = document.getElementById(name + 'Info');
  let scroll = document.getElementById(name + 'Scroll');
  scroll.onclick = function () {
    window.scrollTo(0, info.offsetTop - header.clientHeight);
  }
}
setHeaderScrolling('education');
setHeaderScrolling('skills');
setHeaderScrolling('contact');

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
