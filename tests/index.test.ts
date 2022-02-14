import { expect } from 'chai';
import { InMemoryDatabase } from '../src';

const client = new InMemoryDatabase();
const key = 'foo';
const key1 = 'test';
const key2 = 'test1';
const key3 = 'test3';
const keyValue = 'baz';
const keyValue1 = 'bar';
const keyValue2 = {'foo': 'bar', 'baz': 1};
const keyValue3 = 30;

describe('test InMemoryDatabase module:', () => {
  it('should return undefined for key as does not exist in memory', () => {
    const value = client.get(key);
    expect(value).to.be.equal(undefined);
  });

  it('should return value for key as does not exist in memory', () => {
    client.set(key, keyValue);
    const value = client.get(key);
    expect(value).to.be.equal(keyValue);
  });

  it('should delete key from memory', () => {
    client.delete(key);
    const value = client.get(key);
    expect(value).to.be.equal(undefined);
  });

  it('should set key / value in memory', () => {
    client.set(key, keyValue);
    const value = client.get(key);
    expect(value).to.be.equal(keyValue);
  });

  it('should multi set keys / values in memory', () => {
    const keyValueMap: Map<string, any> = new Map();
    keyValueMap.set(key1, keyValue1);  
    keyValueMap.set(key2, keyValue2);  
    keyValueMap.set(key3, keyValue3);  
    client.mset(keyValueMap);
    expect(client.get(key)).to.be.equal(keyValue);
    expect(client.get(key1)).to.be.equal(keyValue1);
    expect(client.get(key2)).to.deep.equal(keyValue2);
    expect(client.get(key3)).to.be.equal(keyValue3);
  });

  it('should multi get keys / values from memory', () => {
    const testKey = 'testkey'
    const values = client.mget([key1, key2, testKey]);
    expect(values[key1]).to.be.equal(keyValue1);
    expect(values[key2]).to.deep.equal(keyValue2);
    expect(values[testKey]).to.be.equal(undefined);
  });

  it('should has key', () => {
    expect(client.has(key1)).to.be.equal(true);
  });

  it('should has return all database keys', () => {
    const keys = [key, key1, key2, key3]
    expect(client.keys()).to.deep.equal(keys);
  });

  it('should flush values from memory', () => {
    client.flush();
    const values = client.mget([key, key1, key2, key3]);
    expect(values[key]).to.be.equal(undefined);
    expect(values[key1]).to.be.equal(undefined);
    expect(values[key2]).to.deep.equal(undefined);
    expect(values[key3]).to.be.equal(undefined);
  });
});
