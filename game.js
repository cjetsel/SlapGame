console.log("hello world");
let enemy = [
  {
    name: "Lust",
    health: 100,
    hits: 0,
    items: [],
    image: 'assets/img/lust.jpg',
    death: 'assets/img/death.gif'
  },
  {
    name: "Envy",
    health: 100,
    hits: 0,
    items: [],
    image: 'assets/img/envy.jpg',
    death: 'assets/img/death.gif'
  },
];

let hero = {
  name: "User",
  health: 100,
  hits: 0,
  items: [],
  image: 'assets/img/brothers.jpg',
  death: 'assets/img/death.gif'
};

let items = {
  stone: { name: "stone", modifier: -3, description: "Your strength is increased", count: 0 },
  repair: { name: "repair", modifier: 2, description: "Quit destroying my handywork!!", count: 0 },
  ally: { name: "ally", modifier: -1, description: "Reinforcements have arrived!", count: 0 }
};

let enemyIndex = 0;
let heroIndex = 0;
let damage = enemy[enemyIndex].health;

//reduce health by 1
function transmute() {
  enemy[enemyIndex].health--;
  enemy[enemyIndex].hits++;
  enemy[enemyIndex].health += addMods();
  displayHealth();
  displayHits();
  disableButtons();
};

//reduce health by 5
function staff() {
  enemy[enemyIndex].health -= 5;
  enemy[enemyIndex].hits++;
  enemy[enemyIndex].health += addMods();
  displayHealth();
  displayHits();
  disableButtons();
}

//reduce health by 10
function cannon() {
  enemy[enemyIndex].health -= 10;
  enemy[enemyIndex].hits++;
  enemy[enemyIndex].health += addMods();
  displayHealth();
  displayHits();
  disableButtons();
}

//allows buffs to be used
function addMods() {
  let modifierTotal = 0;
  for (let i = 0; i < enemy[enemyIndex].items.length; i++) {
    let currentMod = enemy[enemyIndex].items[i].modifier;
    modifierTotal += currentMod;
  }
  return modifierTotal;
}

function healthRepair() {
  enemy[enemyIndex].items.push(items.repair);
  items.repair.count++;
  if (items.repair.count == 5) {
    document.getElementById('health-repair').disabled = true;
  } return items.repair.count;
}

function stoneActivate() {
  enemy[enemyIndex].items.push(items.stone);
  items.stone.count++;
  if (items.stone.count == 5) {
    document.getElementById('stone-activate').disabled = true;
  } return items.stone.count;
}

function callAlly() {
  enemy[enemyIndex].items.push(items.ally);
  items.ally.count++;
  if (items.ally.count == 5) {
    document.getElementById('call-ally').disabled = true;
  } return items.ally.count;
}


function displayHealth() {
  let progressBar = document.getElementById("enemy-status");
  document.getElementById("enemy-health").innerHTML = enemy[enemyIndex].health;
  progressBar.setAttribute("style", `width: ${enemy[enemyIndex].health}%`);
  document.getElementById("hero-health").innerHTML = hero.health;

};

displayHealth();


function displayHits() {
  document.getElementById("enemy-hits").innerHTML = enemy[enemyIndex].hits;
}

displayHits();

function disableButtons() {
  if (enemy[enemyIndex].health < 1) {
    document.getElementById('transmute-staff').disabled = true;
    document.getElementById('transmute-cannon').disabled = true;
    document.getElementById('transmute-weapon').disabled = true;
  }
  else if (enemy[enemyIndex].health < 5) {
    document.getElementById('transmute-staff').disabled = true;
    document.getElementById('transmute-cannon').disabled = true;
  }
  else if (enemy[enemyIndex].health < 10) {
    document.getElementById('transmute-cannon').disabled = true;
  }
  else {
    document.getElementById('transmute-staff').disabled = false;
    document.getElementById('transmute-cannon').disabled = false;
    document.getElementById('transmute-weapon').disabled = false;
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//when I decide to figure out a death image!
// function death() {
//   if (enemy[enemyIndex].health == 0) {
//     let showImg = document.getElementsByClassName("gif");
//     $(showImg).removeClass('sun').addClass('moon')
//   }
// }