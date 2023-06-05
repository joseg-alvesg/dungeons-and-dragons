import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private readonly _energyType: EnergyType;
  private static _instanceCount = 0;
  
  constructor(name: string) {
    super(name);
    Ranger._instanceCount += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return this._instanceCount;
  }
}