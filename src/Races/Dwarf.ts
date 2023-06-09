import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Dwarf._instanceCount;
  }
}

export default Dwarf;