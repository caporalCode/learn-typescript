export abstract class Character {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (!name) {
      throw new Error("Le nom est obligatoire");
    }
    this._name = name;
  }
}
