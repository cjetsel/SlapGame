console.log("hello world");

let enemyIndex = 0;
let heroIndex = 0;
let enemy = [
  {
    name: "Lust",
    health: 100,
    image: '/assets/img/lust.jpg'
  },
  {
    name: "Envy",
    health: 100,
    image: '/assets/img/envy.jpg'
  },
];

let hero = {
  name: "User",
  health: 100,
  image: '/assets/img/brothers.jpg'
};

//slap function
function slap() {
  //will reduce health by 1
  enemy[enemyIndex].health--;
  //update health
  displayHealth();
};

function displayHealth() {
  document.getElementById("enemy-health-bar").innerHTML = enemy[enemyIndex].health;
  document.getElementById("hero-health-bar").innerHTML = hero.health;
};

//pseudo code

//3 fight fxs: functions that allow -- , -5, and -10.

// transmute weapon: --

// transmute 

//3 buff fxs: functions that allow health (++), defense(10% *), and fight (320% multiplier) buffs

// usage: buffs can only be used 3* each , at which point the corresponding button is disbled

//health fx

//displayHealth

//

// timer function: all buttons are set to a 5 second interval between click.

