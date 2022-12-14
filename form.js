// colorCheckBox //

const colorCheckBox = document.querySelector(".label-checkbox");
const checkBox = document.querySelectorAll('.checkbox')
const colorCheckBox2 = document.querySelector(".label-checkbox2");
const colorCheckBox3 = document.querySelector(".label-checkbox3");
const colorCheckBox4 = document.querySelector(".label-checkbox4");


colorCheckBox.addEventListener("click", () => {
  colorCheckBox.classList.toggle("checked");
  checkBox.name = '-checked'
});

colorCheckBox2.addEventListener("click", () => {
  colorCheckBox2.classList.toggle("checked");
  checkBox.name = '-checked'
});

colorCheckBox3.addEventListener("click", () => {
  colorCheckBox3.classList.toggle("checked");
  checkBox.name = '-checked'
});

colorCheckBox4.addEventListener("click", () => {
  colorCheckBox4.classList.toggle("checked");
  checkBox.name = '-checked'
});

// mobileNav //
  
const hamburgerButton = document.querySelector('.nav-toggler')
const navigation = document.querySelector('.mobile-nav')

hamburgerButton.addEventListener('click', toggleNav)

function toggleNav() {
  hamburgerButton.classList.toggle('active')
  navigation.classList.toggle('active')
}

// scrollNav //

const scrollNav = document.querySelector(".primary-navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    scrollNav.classList.add("scrolled");
  } else {
    scrollNav.classList.remove("scrolled");
  }
});

// yearMoving //

var today = new Date();
var annee = today.getFullYear();
var year = document.getElementById("year");
year.innerHTML = annee;

// END //