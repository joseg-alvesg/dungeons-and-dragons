import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf._instanceCount;
  }
}

export default Elf;