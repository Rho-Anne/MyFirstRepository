class Hero {
  constructor(n) {
    this.name = n;
    this.health = 120;
  }
}

// attack(opponent)
//     if (Math.random() < this.weapon.hitChance) {
//         const damage = Math.floor(Math.random() *
//         (this.weapon.maxDamage - this.weapon.minDamage + 1))
//         + this.weapon.minDamage;
//         log(`${this.name} attacks ${opponent.name}
//             with a ${this.weaponName} for ${damage} damage!`);
//         opponent.takeDamage(damage);
//     } else {
//         log(`${this.name} missed the attack with their
//             ${this.weaponName}!`);
//     }

// message(`${this.name} has equipped a ${this.weaponName}`);

// attack(opponent) {
//    log (`${this.name} attacks ${opponent.name}
//      with a ${this.weaponName} for ${damage} damage!`);
//         opponent.takeDamage(damge);
// }

const weapon = {
  pistol: { hitchane: 30, damage: 15 },
  shotgun: { hitchane: 30, damage: 15 },
  sniper: { hitchane: 70, damage: 35 },
};

let player1, player2;
let currentPlayer;
let currentTurn = 1;

function startGame() {
  player1 = new Hero(document.getElementById("player1-name").value.trim());
  player2 = new Hero(document.getElementById("player2-name").value.trim());
  document.getElementById("player1-title").innerHTML = player1.name;
  document.getElementById("player2-title").innerHTML = player2.name;
  document.getElementById("player1-health").innerHTML =
    "Health: " + player1.health;
  document.getElementById("player2-health").innerHTML =
    "Health: " + player2.health;
  document.getElementById("player-input").style.display = "none";
  message(
    "The game has started! " + player1.name + " vs " + player2.name + "!",
  );
  message(player1.name + "'s turn!");
  currentPlayer = player1;
  currentTurn = 1;
}

function message(msg) {
  const gamelog = document.getElementById("game-log");
  gamelog.innerHTML += `<p>${msg}</p>`;
  gamelog.scrollTop = gamelog.scrollHeight;
}

function selectWeapon(player, weapon, imgElem) {
  if (player !== currentTurn) {
    var playerName = player === 1 ? player1.name : player2.name;
    message(playerName + ", it's not your turn!");
    return;
  }

  var inputId = "player" + player + "-weapon";
  var hidden = document.getElementById(inputId);
  if (!hidden) return;
  hidden.value = weapon;

  var playerName = player === 1 ? player1.name : player2.name;
  message(playerName + " selected " + weapon + "!");
}

function playerAttack(player) {
  var w = document.getElementById("player" + player + "-weapon").value;
  if (!w) {
    message("Pick a weapon first!");
    return;
  }

  var attacker = player === 1 ? player1 : player2;
  var defender = player === 1 ? player2 : player1;
  var wepn = weapon[w];

  var hit = Math.random() * 100 < wepn.hitchane;

  if (hit) {
    var damage = wepn.damage;
    defender.health -= damage;
    if (defender.health < 0) defender.health = 0;
    message(attacker.name + " hit with " + w + " for " + damage + " damage!");
  } else {
    message(attacker.name + " missed!");
  }

  // Update health display
  document.getElementById("player1-health").innerHTML =
    "Health: " + player1.health;
  document.getElementById("player2-health").innerHTML =
    "Health: " + player2.health;

  // Update health bars
  var p1bar = (player1.health / 120) * 100;
  var p2bar = (player2.health / 120) * 100;
  document.getElementById("player1-health-bar").style.width = p1bar + "%";
  document.getElementById("player2-health-bar").style.width = p2bar + "%";

  // Check if game is over
  if (defender.health <= 0) {
    message(attacker.name + " WINS!");
    alert(attacker.name + " WINS!");
    return;
  }

  // Switch turns
  currentTurn = currentTurn === 1 ? 2 : 1;
  var nextPlayer = currentTurn === 1 ? player1.name : player2.name;
  message(nextPlayer + "'s turn!");

  // Clear weapon selection
  document.getElementById("player1-weapon").value = "";
  document.getElementById("player2-weapon").value = "";
}
