function response() {
  alert("Response submitted Sucessfully.")
}

function rent() {
  let text = "Please confirm your booking\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You booking is confiremed.\n Your confirmation id is " + Math.floor(Math.random() * 111111);
  } else {
    text = "You booking is canceled!";
  }
  document.getElementById("rconform").innerHTML = text;
}

function maintainance() {
  let text = "Please confirm your booking\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You registration is confiremed.\n Your registration id is " + Math.floor(Math.random() * 111111);
  } else {
    text = "You booking is canceled!";
  }
  document.getElementById("mconform").innerHTML = text;
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var nname = document.getElementById("rform");
nname.addEventListener('submit', function (event) {
  event.preventDefault();
  rent();
})
var mame = document.getElementById("mform");
mame.addEventListener('submit', function (event) {
  event.preventDefault();
  maintainance();
})
