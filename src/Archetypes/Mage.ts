import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private readonly _energyType: EnergyType;
  private static _instanceCount = 0;
  
  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return this._instanceCount;
  }
}