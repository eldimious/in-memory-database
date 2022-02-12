interface IDatabaseStructure {
  key?: string
}

export class InMemoryDatabase {
  private cache: IDatabaseStructure;

  constructor() {
    this.cache = {} as IDatabaseStructure
  }

  set(key: string, value: any): void {
    const strValue = JSON.stringify(value);
    const index = key as keyof IDatabaseStructure;
    this.cache[index] = strValue;
  }

  get(key: string): any {
    const index = key as keyof IDatabaseStructure;
    if (!this.cache[index]) {
      return undefined;
    }
    try {
      return JSON.parse(this.cache[index] as string);
    } catch (err) {
      throw new SyntaxError(`Failed to parse value of ${key}, try passing a raw option to get the raw value`);
    }
  }

  delete(key: string): void {
    const index = key as keyof IDatabaseStructure;
    delete this.cache[index];
  }

  empty(key: string): void {
    this.cache = {};
  }
}
