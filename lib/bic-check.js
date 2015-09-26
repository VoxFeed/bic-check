var validations = require('./validations');

module.exports = exports = {};

var SMALL = 8;
var LARGE = 11;

exports.swift = function(input) {
  var len = input.length;
  var bank;
  var country;
  var location;
  var branch;

  if (len !== SMALL && len !== LARGE) return false;

  input = input.toUpperCase();
  bank = input.substring(0, 4);
  country = input.substring(4, 6);
  location = input.substring(6, 8);

  if (validations.invalidBank(bank)) return false;
  if (validations.invalidCountry(country)) return false;
  if (validations.invalidLocation(location)) return false;

  if (len === LARGE) {
    branch = input.substring(8, 11);
    if (validations.invalidBranch(branch)) return false;
  }

  return true;
};
