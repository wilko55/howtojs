var assert = require('chai').assert;
var ex1Object = require('../../exercises/ex1-object.js');

describe('The object `myObject`', function () {

  it('should be an object', function () {
    //when
      var obj =  ex1Object();
    //Them
      assert.isObject(obj, 'myObject is not an object !!'); 
  });

  it('should contain a name key value pair', function () {
    //when
      var obj =  ex1Object();
    //Them
      assert.notEqual(obj.name, undefined, 'The value myObject.name does not exist!!');
  });

  it('should contain an age key value pair', function () {
    //when
      var obj =  ex1Object();
    //Them
      assert.notEqual(obj.age, undefined, 'The value myObject.age does not exist !!');
  });

});