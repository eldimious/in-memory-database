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

/*
  Set a key
*/
client.set('key', 'value');

/*
  Fetch a key
*/
client.get('key');

/*
  Delete a key
*/
client.delete('key');

/*
  Set / Fetch multiple keys
*/
 const keyValueMap: Map<string, any> = new Map();
client.set('key1', 'value1');
client.set('key2', {'foo': 'bar', 'baz': 1});
const values = client.mget([key1, key2]);

/*
  Flush database
*/
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
