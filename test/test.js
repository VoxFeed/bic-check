var test = require('tape');
var bicCheck = require('./../lib/bic-check');

test('should return false if length is not 8 or 11', function(assert) {
  var input = 'BOFAUS6'; //7
  var expected = false;
  var actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'wrong length');

  input = 'BOFAUS6SX'; //9
  expected = false;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'wrong length');

  input = 'BOFAUS6SXX'; //10
  expected = false;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'wrong length');

  input = 'BOFAUS6SXXXX'; //12
  expected = false;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'wrong length');

  input = 'BOFAUS6SXXX'; //11
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'correct length');

  input = 'BOFAUS6SXXX'; //8
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'correct length');

  assert.end();
});

test('should return false if bank code contain numbers', function(assert) {
  var input = 'BO1AUS6SXXX';
  var expected = false;
  var actual = bicCheck.swift(input);

  assert.equal(actual, expected, 'wrong, contains numbers in bank code');
  assert.end();
});

test('should return false if first country is invalid ISO Country', function(assert) {
  var input = 'BOFAAA6SXXX';
  var expected = false;
  var actual = bicCheck.swift(input);

  assert.equal(actual, expected, 'wrong, contains invalid country');
  assert.end();
});

test('should return false if location is invalid', function(assert) {
  var input = 'BOFAUS*SXXX';
  var expected = false;
  var actual = bicCheck.swift(input);

  assert.equal(actual, expected, 'wrong, contains invalid location');
  assert.end();
});

test('should return false if branch is invalid', function(assert) {
  var input = 'BOFAUS6SX+X';
  var expected = false;
  var actual = bicCheck.swift(input);

  assert.equal(actual, expected, 'wrong, contains invalid branch');
  assert.end();
});

test('should return true if swift is completely valid', function(assert) {
  var input = 'DEUTDEFF';
  var expected = true;
  var actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'DEUTDEFF500';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'NEDSZAJJ';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'NEDSZAJJXXX';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'DABADKKK';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'UNCRITMM';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'DSBACNBXSHA';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  input = 'BSAMLKLXXXX';
  expected = true;
  actual = bicCheck.swift(input);
  assert.equal(actual, expected, 'valid swift ' + input);

  assert.end();
});
