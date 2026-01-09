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
    
    message(`${this.name} has equipped a ${this.weaponName}`);

    // attack(opponent) {
    //    log (`${this.name} attacks ${opponent.name}!`);
    // }

const weapon     = {
    submachine: {hitchane: 30},
    chopper: {hitchane: 50},
    sniper: {hitchane: 70}
};

let player1, player2;
let currentPlayer;

function startGame() {
  player1 = new Hero(document.getElementById("player1-name").value.trim());
    player2 = new Hero(document.getElementById("player2-name").value.trim());
    document.getElementById("player1-title").innerHTML = player1.name;
    document.getElementById("player2-title").innerHTML = player2.name;
    document.getElementById("player1-health").innerHTML = "Health: " + player1.health;
    document.getElementById("player2-health").innerHTML = "Health: " + player2.health;
    document.getElementById("player-input").style.display = "none";
    message("The game has started! " + player1.name + " vs " + player2.name + "!");
    currentPlayer = player1;
}

function message(msg) {
    const gamelog = document.getElementById("game-log"); 
     gamelog.innerHTML += `<p>${message}</p>`;
     gamelog.scrollTop = gamelog.scrollHeight;
}

function selectWeapon(player, weapon, imgElem) 
{var inputId = 'player' + player + '-weapon';
var hidden = document.getElementById(inputId); 
if (!hidden) return; 
hidden.value = weapon; }

 // highlight selection 

  var container = document.getElementById('player' + player + '-weapon-choices'); 
 if (!container) return; var imgs = container.getElementsByClassName('weapon-img'); for (var i = 0; i < imgs.length; i++)
  { imgs[i].classList.remove('weapon-selected'); } 
 
 imgElem.classList.add('weapon-selected'); 
  messageLog(`${player} selected ${weapon} as their weapon.`); 

