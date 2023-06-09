import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

for (let i = 0; i < 10; i += 1) {
  player1.levelUp();
}

// player1.levelUp();
// player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(b: Battle[]) {
  b.forEach((battle) => {
    battle.fight();
  });
}

// runBattles([pvp, pve]);

console.log('player1', player1);
console.log('player2', player2);
console.log('player3', player3);
console.log('monster1', monster1);
console.log('monster2', monster2);

export { player1, player2, player3, monster1, monster2, pve, runBattles, pvp };
