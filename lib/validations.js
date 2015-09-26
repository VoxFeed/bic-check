var countries = require('./iso-countries');
module.exports = exports = {};

exports.invalidBank = function(bank) {
  return !(/^[A-Z]{4}$/.test(bank));
};

exports.invalidCountry = function(country) {
  return countries.indexOf(country) === -1;
};

exports.invalidLocation = function(loc) {
  return !(/^[A-Z0-9]{2}$/.test(loc));
};

exports.invalidBranch = function(branch) {
  return !(/^[A-Z0-9]{3}$/.test(branch));
};
