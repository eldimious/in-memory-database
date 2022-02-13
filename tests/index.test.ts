import { expect } from 'chai';
import { InMemoryDatabase } from '../src';

const client = new InMemoryDatabase();

describe('test InMemoryDatabase module:', () => {
  it('should return undefined for key as does not exist in memory', () => {
    const key = 'foo';
    const value = client.get(key);
    expect(value).to.be.equal(undefined);
  });

  it('should return value for key as does not exist in memory', () => {
    const key = 'foo';
    const keyValue = 'bar';
    client.set(key, keyValue);
    const value = client.get(key);
    expect(value).to.be.equal(keyValue);
  });

  it('should delete key from memory', () => {
    const key = 'foo';
    client.delete(key);
    const value = client.get(key);
    expect(value).to.be.equal(undefined);
  });

  it('should set key / value in memory', () => {
    const key = 'foo';
    const keyValue = 'bar';
    client.set(key, keyValue);
    const value = client.get(key);
    expect(value).to.be.equal(keyValue);
  });

  it('should multi set keys / values in memory', () => {
    const key = 'foo';
    const keyValue = 'bar';
    const keyValueMap: Map<string, any> = new Map();
    keyValueMap.set('test', 40);  
    keyValueMap.set('test1', {'foo': 'bar', 'baz': 1});  
    keyValueMap.set('test2', 30);  
    client.mset(keyValueMap);
    expect(client.get(key)).to.be.equal(keyValue);
    expect(client.get('test')).to.be.equal(40);
    expect(client.get('test1')).to.deep.equal({'foo': 'bar', 'baz': 1});
    expect(client.get('test2')).to.be.equal(30);
  });

  it('should multi get keys / values from memory', () => {
    const key1 = 'foo';
    const keyValue1 = 'bar';
    const key2 = 'test1';
    const keyValue2 = {'foo': 'bar', 'baz': 1};
    const key3 = 'test3';
    const values = client.mget([key1, key2, key3]);
    expect(values[key1]).to.be.equal(keyValue1);
    expect(values[key2]).to.deep.equal(keyValue2);
    expect(values[key3]).to.be.equal(undefined);
  });
});
