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

// toolTip //

const toolTip = document.querySelector(".tooltip");

toolTip.addEventListener("click", () => {
  toolTip.classList.toggle("clicked");
});

// // switchButton //

// function verif() {
//   var etat = document.getElementById("check").clicked;

//   if (etat) {
//     document.getElementById("applicant").className = "recruiter";

//     document.getElementById("recruiter").className = "applicant";
//   } else {
//     document.getElementById("applicant").className = "applicant";

//     document.getElementById("recruiter").className = "recruiter";
//   }
// }

// // countBar //

// var project = setInterval(projectDone, 10)
// var clients = setInterval(happyClients, 10)
// var coffee = setInterval(cupsCoffee, 10)
// var teub = setInterval(petiteTeub, 10)
// let count1 = 1;
// let count2 = 1;
// let count3 = 1;
// let count4 = 1;

//     function projectDone() {
//         count1++;
//         document.querySelector("#counter1").innerHTML =
//         count1;

//     if(count1 == 500) {
//         clearInterval(project)
//     }
// }

// function happyClients() {
//     count2++;
//     document.querySelector("#counter2").innerHTML =
//     count2;

//     if(count2 == 500) {
//         clearInterval(clients)
//     }
// }

// function cupsCoffee() {
//     count3++;
//     document.querySelector("#counter3").innerHTML =
//     count3;

//     if(count3 == 500) {
//         clearInterval(coffee)
//     }
// }

// function petiteTeub() {
//     count4++;
//     document.querySelector("#counter4").innerHTML =
//     count4;

//     if(count4 == 500) {
//         clearInterval(teub)
//     }
// }


// END //