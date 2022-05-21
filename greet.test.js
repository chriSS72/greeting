var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
  });
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
  });
});