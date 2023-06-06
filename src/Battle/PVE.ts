import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected fighter: Fighter,
    protected enemy: Fighter[] | SimpleFighter[],
  ) {
    super(fighter);
  }

  override fight(): number {
    this.enemy.forEach((e) => {
      while (this.fighter.lifePoints !== -1 && e.lifePoints !== -1) {
        this.fighter.attack(e);
        e.attack(this.fighter);
      }
    });
    return super.fight();
  }
}
