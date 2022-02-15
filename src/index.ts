/* eslint-disable import/prefer-default-export */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
interface IDatabaseStructure {
  key?: string
}

function parseJson(key: string, value: string): any {
  try {
    return JSON.parse(value as string);
  } catch (err) {
    throw new SyntaxError(`Failed to parse value of ${key}, try passing a raw option to get the raw value`);
  }
}

export class InMemoryDatabase {
  private cache: IDatabaseStructure;

  constructor() {
    this.cache = {} as IDatabaseStructure;
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
    return parseJson(key, this.cache[index] as string);
  }

  mget(keys: string[]): any {
    const state: { [key: string]: any } = {};
    for (const key of keys) {
      const index = key as keyof IDatabaseStructure;
      if (!this.cache[index]) {
        state[key] = undefined;
      } else {
        state[key] = parseJson(key, this.cache[index] as string);
      }
    }
    return state;
  }

  mset(keyValueMap: Map<string, any>): void {
    for (const [key, value] of keyValueMap) {
      this.set(key, value);
    }
  }

  keys(): string[] {
    return Object.keys(this.cache);
  }

  has(key: string): boolean {
    return this.cache.hasOwnProperty(key);
  }

  delete(key: string): void {
    const index = key as keyof IDatabaseStructure;
    delete this.cache[index];
  }

  mdelete(keys: string[]): void {
    for (const key of keys) {
      const index = key as keyof IDatabaseStructure;
      if (this.cache[index]) {
        delete this.cache[index];
      }
    }
  }

  flush(): void {
    this.cache = {};
  }
}
