<h1 align="center">Welcome to in-memory-database module 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/in-memory-database" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/in-memory-database.svg">
  </a>
  <img src="https://img.shields.io/badge/npm-%3E%3D7.13.0-blue.svg" />
  <a href="https://github.com/eldimious/in-memory-database#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/eldimious/in-memory-database/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>

  <a href="https://twitter.com/el_dimious" target="_blank">
    <img alt="Twitter: el_dimious" src="https://img.shields.io/twitter/follow/el_dimious.svg?style=social" />
  </a>
</p>

> Simple caching module that works a like memcached. All keys are stored in a single object.

## Install

```sh
npm install --save in-memory-database
```

## Usage

```ts
const { InMemoryDatabase } = require('in-memory-database');

const client = new InMemoryDatabase();
client.set('key', 'value');
client.get('key');
```

## Docs
### `class InMemoryDatabase()`

**Class Methods**

These functions are specified in the in-memory-database.

> `get(key: string): any`

Gets a key'svalue.
```ts
client.get('key');
```

> `set(key: string, value: any): void`

Sets a key to value.
```ts
client.set('key', 'value');
```

> `delete(key: string): void`

Deletes a key.

```ts
client.delete('key');
```

> `mget(keys: string[]): any`

Lists all of the keys that defined in the array.

```ts
const values = client.mget(['key1', 'key2']);
```

> `mset(keyValueMap: Map<string, any>): void`

Sets the multiple a keys/values.

```ts
const keyValueMap: Map<string, any> = new Map();
keyValueMap.set('key1', 'value1');
keyValueMap.set('key2', {'foo': 'bar', 'baz': 1});
client.mset(keyValueMap);
```

> `keys(): string[]`

Get all database keys.

```ts
const keys = client.keys();
```

> `has(key: string): boolean`

Defines if we have stored specific key in database.

```ts
const isAlreadyThere = client.has('key');
```

> `flush(): void`

Flush database.

```ts
client.flush();
```

## Run tests

```sh
npm run test
```

## Author

👤 **Dimos Botsaris**

* Website: https://www.eldimious.com
* Twitter: [@el_dimious](https://twitter.com/el_dimious)
* Github: [@eldimious](https://github.com/eldimious)
* LinkedIn: [@dimosthenis-botsaris-5ab16485](https://www.linkedin.com/in/dimosthenis-botsaris-5ab16485/)

## Support Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y797KCA)

## Show your support

Give a ⭐️ if this project helped you!
