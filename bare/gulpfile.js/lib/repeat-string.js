module.exports = function (pattern, number) {
  var buffer = [];

  while (number > 0) {
    number--;
    buffer.push(pattern);
  }

  return buffer.join('');
};
