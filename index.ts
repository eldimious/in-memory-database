import { InMemoryDatabase } from './src';

const client = new InMemoryDatabase();

client.set("test", { a: 1, b: 1});
console.log(client.get("test"));
console.log(client.get("test1"));
client.set("test", 1);
console.log(client.get("test"));
client.delete("test")
console.log(client.get("test"));
