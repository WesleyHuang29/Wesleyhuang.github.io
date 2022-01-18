var i = 0;
var txt = 'explore the site to see.................... my skillset and previous works';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("TW").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}