const assert = require('assert');
const functions = require("../index.js")
const phonebook1 = [{"name":"Alex Bowman","number":"48-2002"},{"name":"Aric Almirola","number":"10-1001"},{"name":"Bubba Wallace","number":"23-1111"},{"name":"Chase Elliott","number":"9-9900"},{"name":"Denny Hamlin","number":"11-0022"},{"name":"John Logano","number":"22-2299"},{"name":"Kevin Harvick","number":"4-1154"},{"name":"Kyle Busch","number":"18-3002"},{"name":"Kyle Larson","number":"5-2234"},{"name":"Matt Dibenedetto","number":"21-1102"}];

it('Поиск номера по имени', () => {
  const result = functions.binary_find(phonebook1, "Chase Elliott");
  assert.equal(result, "9-9900");
});